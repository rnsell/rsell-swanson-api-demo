import { List, Row } from "antd";
import React from "react";
import { QuoteComponent, QuoteProps } from "./quote.component";
import { Skeleton } from "antd";
import styled from "styled-components";
import { spacing } from "../sc-utils";

type QuoteListProps = {
  listOfQuotes: Array<QuoteProps>;
  totalNumberOfQuotes: number;
  isLoading?: boolean;
};

export const StyledSkeleton = styled(Skeleton)`
  margin-left: ${spacing(4)};
  margin-right: ${spacing(4)};
`;

export const QuoteList: React.FunctionComponent<QuoteListProps> = (props) => {
  const { listOfQuotes, totalNumberOfQuotes, isLoading = false } = props;

  const adjustedDataList = isLoading
    ? Array(totalNumberOfQuotes).fill(true)
    : listOfQuotes;

  return (
    <>
      <List
        bordered
        dataSource={adjustedDataList}
        renderItem={(aQuoteRow: QuoteProps) => {
          if (!isLoading) {
            return <QuoteComponent {...aQuoteRow} />;
          }

          return (
            <Row>
              <StyledSkeleton active paragraph={false} />
            </Row>
          );
        }}
        data-testid="quote-list"
      />
    </>
  );
};
