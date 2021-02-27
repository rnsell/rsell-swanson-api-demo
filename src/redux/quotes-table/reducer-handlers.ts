import { calculateNewVoteClick } from "./calculate-vote-click";
import { ClickOnQuote, PopulateQuotesAction } from "./quotes-table.actions";
import { generateQuotesTable, QuotesTable } from "./quotes-table.model";

export const handlePopulateTable = ([action]: [PopulateQuotesAction]) => {
  const { payload: quotes } = action;
  const newQuotesTable = generateQuotesTable(quotes);

  return newQuotesTable;
};

export const handleQuotesTableVoteClick = (state: QuotesTable) => ([action]: [
  ClickOnQuote
]): QuotesTable => {
  const { payload } = action;
  const { quoteId } = payload;
  const quote = state[quoteId];

  if (!quote) {
    return state;
  }

  const newQuote = calculateNewVoteClick(quote, action);
  const quoteRecord = { [newQuote.id]: newQuote };

  return { ...state, ...quoteRecord };
};
