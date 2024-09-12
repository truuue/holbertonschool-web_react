import React from "react";
import { shallow } from "enzyme";
import Login from "./Login.js";
import { StyleSheetTestUtils } from "aphrodite";

describe("Login Composant", function () {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("should Login renders without crashing", function () {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should find img in Login", function () {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input").length).toEqual(2);
  });

  it("should find h1 in Login", function () {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label").length).toEqual(2);
  });
});
