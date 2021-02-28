import { createAction } from "@reduxjs/toolkit";
import { FetchingQuoteState } from "./fetching-quotes.model";

export type FetchQuoteAction = {
  type: "FETCH_QUOTES::FETCH";
  payload: undefined;
};

export type SetFetchQuoteAction = {
  type: "FETCH_QUOTES::SET_FETCH_STATE";
  payload: FetchingQuoteState;
};

export type FetchingQuoteActions = FetchQuoteAction | SetFetchQuoteAction;

export const fetchQuotes = createAction<undefined, "FETCH_QUOTES::FETCH">(
  "FETCH_QUOTES::FETCH"
);

export const fetchingLoadingAction = createAction<FetchingQuoteState>(
  "FETCH_QUOTES::SET_FETCH_STATE"
);
