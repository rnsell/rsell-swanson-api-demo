import React from "react";
import { Button, List } from "antd";
import styled from "styled-components";
import { DislikeTwoTone, LikeTwoTone } from "@ant-design/icons";
import { spacing } from "../sc-utils";

const RowContainer = styled.div`
  display: flex;
  width: 100%;
`;

const VotingContainer = styled.div`
  padding-left: ${spacing(2)};
  padding-right: ${spacing(2)};
  min-width: 125px;
`;

const QuoteContainer = styled.div``;

const QuoteCounterContainer = styled.div`
  padding-right: ${spacing(2)};
  padding-left: ${spacing(2)};
  width: ${spacing(10)};
  display: inline-block;
`;

const QuoteCounterJusticationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export type QuoteProps = {
  quoteText: string;
  votes: number;
  upVoteSelected: boolean;
  downVoteSelected: boolean;
  onUpVoteClick: () => void;
  onDownVoteClick: () => void;
};

export const QuoteComponent: React.FunctionComponent<QuoteProps> = (props) => {
  const {
    quoteText,
    votes,
    onUpVoteClick,
    onDownVoteClick,
    upVoteSelected,
    downVoteSelected,
  } = props;
  const upVoteButtonType = upVoteSelected ? "primary" : "default";
  const downVoteButtonType = downVoteSelected ? "primary" : "default";

  return (
    <List.Item data-testid="quote__list-item">
      <RowContainer data-testid="quote__row-button-container">
        <VotingContainer data-testid="quote__button-container">
          <Button
            icon={<LikeTwoTone />}
            onClick={onUpVoteClick}
            type={upVoteButtonType}
            aria-label="Increase Vote"
            data-testid="quote__upvote-button"
          />
          <QuoteCounterContainer
            aria-label="Total Votes"
            data-testid="quote__quote-counter-container"
          >
            <QuoteCounterJusticationContainer data-testid="quote__quote-counter-justification-container">
              {votes}
            </QuoteCounterJusticationContainer>
          </QuoteCounterContainer>
          <Button
            icon={<DislikeTwoTone />}
            onClick={onDownVoteClick}
            type={downVoteButtonType}
            aria-label="Decrease Vote"
            data-testid="quote__downvote-button"
          />
        </VotingContainer>
        <QuoteContainer data-testid="quote__quote-text" aria-label="Quote Text">
          {quoteText}
        </QuoteContainer>
      </RowContainer>
    </List.Item>
  );
};
