import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";

describe("<Login />", () => {
  it("Login renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that the components renders 2 input tags", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("div.login input")).toHaveLength(2);
  });
  it("Verify that the components renders 2 label tags", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("div.login label")).toHaveLength(2);
  });
});
