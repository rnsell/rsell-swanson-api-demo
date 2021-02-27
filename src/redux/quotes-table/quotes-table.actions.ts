import { createAction } from "@reduxjs/toolkit";

export type PopulateQuotesAction = {
  type: "QUOTES_TABLE::POPULATE";
  payload: Array<string>;
};

export enum ButtonClickType {
  UP_VOTE = "UP_VOTE",
  DOWN_VOTE = "DOWN_VOTE",
}

export type ClickOnQuote = {
  type: "QUOTES_TABLE::CLICK";
  payload: {
    clickType: ButtonClickType;
    quoteId: string;
  };
};

export type QuotesTableActions = PopulateQuotesAction | ClickOnQuote;

export const populateQuotesTable = createAction<Array<string>>(
  "QUOTES_TABLE::POPULATE"
);

export const upVote = (quoteId: string): ClickOnQuote => {
  return {
    type: "QUOTES_TABLE::CLICK",
    payload: {
      clickType: ButtonClickType.UP_VOTE,
      quoteId,
    },
  };
};

export const downVote = (quoteId: string): ClickOnQuote => {
  return {
    type: "QUOTES_TABLE::CLICK",
    payload: {
      clickType: ButtonClickType.DOWN_VOTE,
      quoteId,
    },
  };
};
