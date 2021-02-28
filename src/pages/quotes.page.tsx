import React, { useEffect, useState } from "react";
import { Header, QuoteList } from "../components";
import styled from "styled-components";
import { spacing } from "../sc-utils";
import { useDispatch, useSelector } from "react-redux";
import { FetchingQuoteState, fetchQuotes } from "../redux";
import {
  fetchingQuotesProgress,
  numberOfQuotesToFetch,
  quotesList,
  voteCount,
} from "../views";
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
  const totalQuotes = useSelector(numberOfQuotesToFetch);
  const progress = useSelector(fetchingQuotesProgress);
  const errorFetchingData = progress === FetchingQuoteState.ERROR;
  const isLoading = progress === FetchingQuoteState.LOADING;
  // const isLoading = true;

  const listOfQuotes = generateListOfQuotes(dispatch, quotes);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (!hasMounted) {
      match<FetchingQuoteState, void>(progress)
        .with(FetchingQuoteState.ERROR, () => dispatch(fetchQuotes()))
        .with(FetchingQuoteState.LOADING, () => dispatch(fetchQuotes()))
        .otherwise(() => void 0);
      setHasMounted(true);
    }
  }, [hasMounted, dispatch, progress]);

  return (
    <>
      <Header votes={votes} isLoading={isLoading} />
      <Content>
        {errorFetchingData && (
          <Alert
            message="Error Occured"
            description="An error occured fetching fetching data. Try refreshing the page"
            type="error"
          />
        )}
        {!errorFetchingData && (
          <QuoteList
            listOfQuotes={listOfQuotes}
            isLoading={isLoading}
            totalNumberOfQuotes={totalQuotes}
          />
        )}
      </Content>
    </>
  );
};
