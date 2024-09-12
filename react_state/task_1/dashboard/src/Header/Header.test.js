import React from "react";
import { shallow } from "enzyme";
import Header from "./Header.js";
import { StyleSheetTestUtils } from "aphrodite";

describe("Header Composant", function () {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("should Header renders without crashing", function () {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should find img in Header", function () {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img"));
  });

  it("should find h1 in Header", function () {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("h1"));
  });
});
