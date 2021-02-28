import { downVote, Quote, upVote } from "../../redux";
import { QuoteProps } from "../../components";
import { Action } from "redux";

type DispatchFunction = (action: Action) => void;

export const selectQuoteProps = (dispatch: DispatchFunction) => (
  quote: Quote
): QuoteProps => {
  const { id } = quote;

  const onUpVoteClick = () => {
    const upVoateAction = upVote(id);
    dispatch(upVoateAction);
  };

  const onDownVoteClick = () => {
    const downVoteAction = downVote(id);
    dispatch(downVoteAction);
  };

  const quoteProps: QuoteProps = {
    ...quote,
    onUpVoteClick,
    onDownVoteClick,
  };

  return quoteProps;
};

export const generateListOfQuotes = (
  dispath: DispatchFunction,
  quotes: Quote[]
): QuoteProps[] => {
  return quotes.map(selectQuoteProps(dispath));
};
