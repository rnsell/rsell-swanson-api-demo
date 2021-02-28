import React, { useEffect } from "react";
import { Header, QuoteList } from "../components";
import styled from "styled-components";
import { spacing } from "../sc-utils";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotes } from "../redux";
import { quotesList, voteCount } from "../views";
import { generateListOfQuotes } from "./selectors";

const Content = styled.div`
  margin: ${spacing(2)};
`;

// I need to handle the loading mode
export const QuotesPage = () => {
  const dispatch = useDispatch();
  const quotes = useSelector(quotesList);
  const votes = useSelector(voteCount);
  const listOfQuotes = generateListOfQuotes(dispatch, quotes);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  return (
    <>
      <Header votes={votes} />
      <Content>
        <QuoteList listOfQuotes={listOfQuotes} />
      </Content>
    </>
  );
};
