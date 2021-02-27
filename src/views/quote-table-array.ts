import { ApplicationReduxStore } from "../redux";
import { toPairs } from "lodash";
import { createSelector } from "@reduxjs/toolkit";

export const quotesTableSelector = (state: ApplicationReduxStore) =>
  state.quotesTable;

export const quotesList = createSelector(quotesTableSelector, (quotesTable) => {
  const quotesArray = toPairs(quotesTable).map(([id, quote]) => quote);

  return quotesArray;
});

export const voteCount = createSelector(quotesList, (listOfQuotes) => {
  const totalVotes = listOfQuotes.reduce((totalVotes, currentValue) => {
    return (totalVotes += currentValue?.votes);
  }, 0);

  return totalVotes;
});
