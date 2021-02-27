import { match } from "ts-pattern";
import { QuotesTableActions } from "./quotes-table.actions";
import { QuotesTable } from "./quotes-table.model";
import {
  handlePopulateTable,
  handleQuotesTableVoteClick,
} from "./reducer-handlers";

const defaultQuoteTable: QuotesTable = {};

export const quoteTableReducer = (
  state: QuotesTable = defaultQuoteTable,
  action: QuotesTableActions
): QuotesTable =>
  match<[QuotesTableActions], QuotesTable>([action])
    .with([{ type: "QUOTES_TABLE::POPULATE" }], handlePopulateTable)
    .with([{ type: "QUOTES_TABLE::CLICK" }], handleQuotesTableVoteClick(state))
    .otherwise(() => state);
