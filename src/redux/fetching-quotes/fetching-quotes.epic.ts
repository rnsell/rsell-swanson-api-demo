import { EpicDependencies } from "../epic-depdencies";
import { Epic, ofType, StateObservable } from "redux-observable";
import { from, merge } from "rxjs";
import { switchMap, mergeMap } from "rxjs/operators";
import { ApplicationReduxStore } from "../root-reducer";
import {
  fetchingLoadingAction,
  FetchQuoteAction,
} from "./fetching-quotes.actions";
import { populateQuotesTable } from "../quotes-table";
import { FetchingQuoteState } from "./fetching-quotes.model";

const fetchQuotes = async (
  state$: StateObservable<ApplicationReduxStore>,
  dependencies: Pick<EpicDependencies, "getRonSwonsonQuotes">
) => {
  const { getRonSwonsonQuotes } = dependencies;
  const {
    numberOfQuotesToFetch,
    failApiRequests,
  } = state$.value.applicationSettings;
  const errorAction = fetchingLoadingAction(FetchingQuoteState.ERROR);
  const errorQuotesTableAction = populateQuotesTable([]);

  if (failApiRequests) {
    return [errorAction, errorQuotesTableAction];
  }

  try {
    const quotes = await getRonSwonsonQuotes(numberOfQuotesToFetch);
    const successAction = fetchingLoadingAction(FetchingQuoteState.SUCCESS);
    const populateQuotesTableAction = populateQuotesTable(quotes);

    return [successAction, populateQuotesTableAction];
  } catch (ex) {
    // Could do something more special here but we only have one error state

    return [errorAction, errorQuotesTableAction];
  }
};

export const fetchingQuotes: Epic<
  any,
  any,
  ApplicationReduxStore,
  EpicDependencies
> = (action$, state$, dependencies: EpicDependencies) => {
  return action$.pipe(
    ofType<FetchQuoteAction>("FETCH_QUOTES::FETCH"),
    switchMap(() => {
      const loadingAction = fetchingLoadingAction(FetchingQuoteState.LOADING);
      const loading$ = from([loadingAction]);
      const request$ = from(fetchQuotes(state$, dependencies)).pipe(
        mergeMap((array) => from(array))
      );

      return merge(loading$, request$);
    })
  );
};
