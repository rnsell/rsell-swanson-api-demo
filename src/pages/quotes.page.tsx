import React, { useEffect } from "react";
import { Header, QuoteList } from "../components";
import styled from "styled-components";
import { spacing } from "../sc-utils";
import { useDispatch, useSelector } from "react-redux";
import { FetchingQuoteState, fetchQuotes } from "../redux";
import { fetchingQuotesProgress, quotesList, voteCount } from "../views";
import { generateListOfQuotes } from "./selectors";
import { match } from "ts-pattern";
import { Alert } from "antd";

const Content = styled.div`
  margin: ${spacing(2)};
`;

// I need to handle the loading mode
export const QuotesPage = () => {
  const dispatch = useDispatch();
  const quotes = useSelector(quotesList);
  const votes = useSelector(voteCount);
  const progress = useSelector(fetchingQuotesProgress);
  const errorFetchingData = progress === FetchingQuoteState.ERROR;
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
        {errorFetchingData && (
          <Alert
            message="Error Occured"
            description="An error occured fetching fetching data. Try refreshing the page"
            type="error"
          />
        )}
        <QuoteList listOfQuotes={listOfQuotes} />
      </Content>
    </>
  );
};
