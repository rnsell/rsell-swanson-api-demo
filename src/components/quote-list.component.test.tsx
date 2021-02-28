import React from "react";
import { mount } from "enzyme";
import { quoteFixture } from "./quotes-fixture";
import { QuoteList, StyledSkeleton } from "./quote-list.component";

describe("quote-list.component.tsx", () => {
  let component: any;
  const componentProps = {
    listOfQuotes: [quoteFixture],
    totalNumberOfQuotes: [quoteFixture].length,
  };

  beforeEach(() => {
    component = mount(<QuoteList {...componentProps} />);
  });

  it("Should match snapshot for not loading", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should match snapshot for loading", () => {
    component.setProps({ isLoading: true });
    expect(component.find(StyledSkeleton)).toBeTruthy();

    expect(component).toMatchSnapshot();
  });
});
