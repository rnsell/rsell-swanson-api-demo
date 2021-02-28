import { ApplicationReduxStore } from "../redux";
import { toPairs } from "lodash";
import { createSelector } from "reselect";

export const quotesTableSelector = (
  state: Pick<ApplicationReduxStore, "quotesTable">
) => state.quotesTable;

export const quotesList = createSelector(quotesTableSelector, (quotesTable) => {
  const quotesArray = toPairs(quotesTable).map(([, quote]) => quote);

  return quotesArray;
});

export const voteCount = createSelector(quotesList, (listOfQuotes) => {
  const totalVotes = listOfQuotes.reduce((totalVotes, currentValue) => {
    return (totalVotes += currentValue.votes);
  }, 0);

  return totalVotes;
});

export const fetchingQuotesProgress = (
  state: Pick<ApplicationReduxStore, "fetchingQuotes">
) => {
  return state.fetchingQuotes;
};

export const numberOfQuotesToFetch = (
  state: Pick<ApplicationReduxStore, "applicationSettings">
) => {
  return state.applicationSettings.numberOfQuotesToFetch;
};
