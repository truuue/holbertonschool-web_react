import { StyleSheetTestUtils } from "aphrodite";
import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";

describe("<Header />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("Header renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that the components render img", () => {
    const wrapper = shallow(<Header />);
    wrapper.update();
    expect(wrapper.find("div img")).toHaveLength(1);
  });
  it("Verify that the components render h1", () => {
    const wrapper = shallow(<Header />);
    wrapper.update();
    expect(wrapper.find("div h1")).toHaveLength(1);
  });
});
