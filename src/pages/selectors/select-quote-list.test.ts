import { Quote } from "../../redux";
import { generateListOfQuotes, selectQuoteProps } from "./select-quote-list";

describe("select-quote-list.ts", () => {
  const aRandomQuote = new Quote({
    quoteText: "Go Beyond Plus Ultra!!",
    votes: 9000,
    upVoteSelected: false,
    downVoteSelected: false,
  });

  describe("selectQuoteProps", () => {
    it("Should dispatch actions", () => {
      const dispatch = jest.fn(() => void 0);

      const quoteProp = selectQuoteProps(dispatch)(aRandomQuote);

      expect(quoteProp).toMatchSnapshot();
      quoteProp.onUpVoteClick();
      quoteProp.onDownVoteClick();

      expect(dispatch).toHaveBeenCalledTimes(2);

      const [upVoteCall, downVoteCall] = dispatch.mock.calls;
      expect(upVoteCall).toMatchSnapshot();
      expect(downVoteCall).toMatchSnapshot();
    });
  });

  it("Should generate list of quotes", () => {
    const dispatch = jest.fn(() => void 0);
    const list = generateListOfQuotes(dispatch, [aRandomQuote]);

    expect(list).toMatchSnapshot();
  });
});
