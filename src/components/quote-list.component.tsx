import { List } from "antd";
import React from "react";
import { QuoteComponent, QuoteProps } from "./quote.component";

type QuoteListProps = {
  listOfQuotes: Array<QuoteProps>;
};

export const QuoteList: React.FunctionComponent<QuoteListProps> = (props) => {
  const { listOfQuotes } = props;

  return (
    <>
      <List
        bordered
        dataSource={listOfQuotes}
        renderItem={(aQuoteRow: QuoteProps) => (
          <QuoteComponent {...aQuoteRow} />
        )}
      />
    </>
  );
};
