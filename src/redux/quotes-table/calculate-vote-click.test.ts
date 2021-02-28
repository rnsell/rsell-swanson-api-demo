import { calculateNewVoteClick } from "./calculate-vote-click";
import { downVote, upVote } from "./quotes-table.actions";
import { Quote } from "./quotes-table.model";

const baseQuote = new Quote({
  quoteText: "Go Beyond Plus Ultra",
  upVoteSelected: false,
  downVoteSelected: false,
  votes: 0,
});

const upVotedQuote = new Quote({
  quoteText: "Go Beyond Plus Ultra",
  upVoteSelected: true,
  downVoteSelected: false,
  votes: 0,
});

const downVotedQuote = new Quote({
  quoteText: "Go Beyond Plus Ultra",
  upVoteSelected: false,
  downVoteSelected: true,
  votes: 0,
});

const upVoteClickAction = upVote("someId");
const downVoteClickAction = downVote("someId");

describe("calculate-vote-click", () => {
  it("upvote cases", () => {
    const votesCases = [
      calculateNewVoteClick(baseQuote, upVoteClickAction),
      calculateNewVoteClick(upVotedQuote, upVoteClickAction),
      calculateNewVoteClick(downVotedQuote, upVoteClickAction),
    ];
    expect(votesCases).toMatchSnapshot();
  });

  describe("downvote cases", () => {
    it("downvote cases", () => {
      const votesCases = [
        calculateNewVoteClick(baseQuote, downVoteClickAction),
        calculateNewVoteClick(upVotedQuote, downVoteClickAction),
        calculateNewVoteClick(downVotedQuote, downVoteClickAction),
      ];
      expect(votesCases).toMatchSnapshot();
    });
  });
});
