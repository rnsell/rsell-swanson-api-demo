import hash from "object-hash";
import { fromPairs, random } from "lodash";

export class Quote {
  id: string;
  quoteText: string;
  votes: number;
  upVoteSelected: boolean;
  downVoteSelected: boolean;

  constructor(data: {
    quoteText: string;
    votes?: number;
    id?: string;
    upVoteSelected?: boolean;
    downVoteSelected?: boolean;
  }) {
    const { quoteText, votes, id, upVoteSelected, downVoteSelected } = data;
    this.id = id ?? hash(quoteText, { algorithm: "md5" });
    this.quoteText = quoteText;
    // Lets simulate some votes already existed
    this.votes = votes ?? random(-2, 3);
    this.upVoteSelected = upVoteSelected ?? false;
    this.downVoteSelected = downVoteSelected ?? false;
  }
}

export type QuotesTable = {
  [key: string]: Quote;
};

export const generateQuotesTable = (quotes: string[]): QuotesTable => {
  const table = fromPairs(
    quotes.map((quoteText) => {
      const newQuote = new Quote({ quoteText });
      return [newQuote.id, newQuote];
    })
  );

  return table;
};
