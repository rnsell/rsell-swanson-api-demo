import React from "react";
import { mount } from "enzyme";
import { QuoteComponent } from "./quote.component";
import { quoteFixture } from "./quotes-fixture";

describe("header.component.ts", () => {
  let component: any;
  const componentProps = quoteFixture;

  beforeEach(() => {
    component = mount(<QuoteComponent {...componentProps} />);
  });

  it("Should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("Buttons should register clicks", () => {
    const upvoteButton = component
      .find(`[data-testid="quote__upvote-button"]`)
      .hostNodes();
    const downVoteButton = component
      .find(`[data-testid="quote__downvote-button"]`)
      .hostNodes();

    upvoteButton.simulate("click");
    downVoteButton.simulate("click");

    expect(componentProps.onUpVoteClick).toBeCalledTimes(1);
    expect(componentProps.onDownVoteClick).toBeCalledTimes(1);
  });

  it("Buttons should be default", () => {
    const upvoteButton = component
      .find(`[data-testid="quote__upvote-button"]`)
      .at(1);
    const downVoteButton = component
      .find(`[data-testid="quote__downvote-button"]`)
      .at(1);

    const upVoteButtonProps = upvoteButton.props();
    const downVoteButtonProps = downVoteButton.props();

    expect(upVoteButtonProps.className.includes("ant-btn-default")).toBe(true);
    expect(downVoteButtonProps.className.includes("ant-btn-default")).toBe(
      true
    );
  });

  it("Buttons should be primary", () => {
    component.setProps({
      upVoteSelected: true,
      downVoteSelected: true,
    });
    const upvoteButton = component
      .find(`[data-testid="quote__upvote-button"]`)
      .at(1);
    const downVoteButton = component
      .find(`[data-testid="quote__downvote-button"]`)
      .at(1);

    const upVoteButtonProps = upvoteButton.props();
    const downVoteButtonProps = downVoteButton.props();

    expect(upVoteButtonProps.className.includes("ant-btn-primary")).toBe(true);
    expect(downVoteButtonProps.className.includes("ant-btn-primary")).toBe(
      true
    );
  });
});
