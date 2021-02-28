import React, { useEffect } from "react";
import { Header, QuoteList } from "../components";
import styled from "styled-components";
import { spacing } from "../sc-utils";
import { useDispatch, useSelector } from "react-redux";
import { FetchingQuoteState, fetchQuotes } from "../redux";
import { fetchingQuotesProgress, quotesList, voteCount } from "../views";
import { generateListOfQuotes } from "./selectors";
import { match } from "ts-pattern";

const Content = styled.div`
  margin: ${spacing(2)};
`;

// I need to handle the loading mode
export const QuotesPage = () => {
  const dispatch = useDispatch();
  const quotes = useSelector(quotesList);
  const votes = useSelector(voteCount);
  const progress = useSelector(fetchingQuotesProgress);

  const listOfQuotes = generateListOfQuotes(dispatch, quotes);
  useEffect(() => {
    match<FetchingQuoteState, void>(progress)
      .with(FetchingQuoteState.ERROR, () => dispatch(fetchQuotes()))
      .with(FetchingQuoteState.LOADING, () => dispatch(fetchQuotes()))
      .otherwise(() => void 0);
  }, [dispatch, progress]);

  return (
    <>
      <Header votes={votes} />
      <Content>
        <QuoteList listOfQuotes={listOfQuotes} />
      </Content>
    </>
  );
};
