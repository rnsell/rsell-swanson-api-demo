import React from "react";
import { mount } from "enzyme";
import { Header, TotalVotes } from "./header.component";

describe("header.component.ts", () => {
  let component: any;

  beforeEach(() => {
    component = mount(<Header votes={15} />);
  });

  it("Should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should display correct number of votes while not loading.", () => {
    const totalVotes = component.find(TotalVotes);

    expect(totalVotes.text()).toBe(`Total Votes: ${15}`);
  });

  it("Should display zero votes while not loading.", () => {
    component.setProps({ isLoading: true });
    const totalVotes = component.find(TotalVotes);

    expect(totalVotes.text()).toBe(`Total Votes: ${0}`);
  });
});
