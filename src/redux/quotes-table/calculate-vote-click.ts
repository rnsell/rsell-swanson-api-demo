import { match } from "ts-pattern";
import { ClickOnQuote, ButtonClickType } from "./quotes-table.actions";
import { Quote } from "./quotes-table.model";

export const downVoteClick = {
  payload: {
    clickType: ButtonClickType.DOWN_VOTE,
  },
};

export const upVoteClick = {
  payload: {
    clickType: ButtonClickType.UP_VOTE,
  },
};

export const calculateNewVoteClick = (
  quote: Quote,
  clickQuoteAction: ClickOnQuote
): Quote => {
  return (
    match<[Quote, ClickOnQuote], Quote>([quote, clickQuoteAction])
      // Univted
      .with(
        [{ upVoteSelected: false, downVoteSelected: true }, upVoteClick],
        ([oldQuote]) => {
          const upVoteSelected = true;
          const downVoteSelected = false;
          const votes = (oldQuote.votes += 2);
          return { ...oldQuote, upVoteSelected, downVoteSelected, votes };
        }
      )
      .with(
        [{ upVoteSelected: false, downVoteSelected: false }, upVoteClick],
        ([oldQuote]) => {
          const upVoteSelected = true;
          const downVoteSelected = false;
          const votes = (oldQuote.votes += 1);
          return { ...oldQuote, upVoteSelected, downVoteSelected, votes };
        }
      )
      .with(
        [{ upVoteSelected: true, downVoteSelected: false }, upVoteClick],
        ([oldQuote]) => {
          const upVoteSelected = false;
          const downVoteSelected = false;
          const votes = (oldQuote.votes -= 1);
          return { ...oldQuote, upVoteSelected, downVoteSelected, votes };
        }
      )
      .with(
        [{ upVoteSelected: false, downVoteSelected: false }, downVoteClick],
        ([oldQuote]) => {
          const upVoteSelected = false;
          const downVoteSelected = true;
          const votes = (oldQuote.votes -= 1);
          return { ...oldQuote, upVoteSelected, downVoteSelected, votes };
        }
      )
      .with(
        [{ upVoteSelected: false, downVoteSelected: true }, downVoteClick],
        ([oldQuote]) => {
          const upVoteSelected = false;
          const downVoteSelected = false;
          const votes = (oldQuote.votes += 1);
          return { ...oldQuote, upVoteSelected, downVoteSelected, votes };
        }
      )
      .with(
        [{ upVoteSelected: true, downVoteSelected: false }, downVoteClick],
        ([oldQuote]) => {
          const upVoteSelected = false;
          const downVoteSelected = true;
          const votes = (oldQuote.votes -= 2);
          return { ...oldQuote, upVoteSelected, downVoteSelected, votes };
        }
      )
      .otherwise(() => quote)
  );
};
