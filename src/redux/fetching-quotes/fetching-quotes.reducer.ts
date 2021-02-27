import { match } from "ts-pattern";
import { FetchingQuoteActions } from "./fetching-quotes.actions";
import { FetchingQuoteState } from "./fetching-quotes.model";

export const fetchingQuotesReducer = (
  state: FetchingQuoteState = FetchingQuoteState.LOADING,
  action: FetchingQuoteActions
): FetchingQuoteState => {
  return match<[FetchingQuoteActions], FetchingQuoteState>([action])
    .with(
      [{ type: "FETCH_QUOTES::SET_FETCH_STATE" }],
      ([action]) => action.payload
    )
    .otherwise(() => state);
};
