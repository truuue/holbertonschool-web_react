import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });

  it("renders three list items", () => {
    const wrapper = shallow(<Notifications />);
    const listItems = wrapper.find("li");
    expect(listItems).toHaveLength(3);
  });

  it("renders the text 'Here is the list of notifications'", () => {
    const wrapper = shallow(<Notifications />);
    const textElement = wrapper.find("p").text();
    expect(textElement).toEqual("Here is the list of notifications");
  });

  it("renders a custom class", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.hasClass("notifications")).toBe(true);
  });
});
