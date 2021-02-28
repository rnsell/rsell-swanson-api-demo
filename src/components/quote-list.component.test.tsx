import React from "react";
import { mount } from "enzyme";
import { quoteFixture } from "./quotes-fixture";
import { QuoteList } from "./quote-list.component";

describe("quote-list.component.tsx", () => {
  let component: any;
  const componentProps = {
    listOfQuotes: [quoteFixture],
  };

  beforeEach(() => {
    component = mount(<QuoteList {...componentProps} />);
  });

  // This component has no real logic so lets just snapshot it and move on
  it("Should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
