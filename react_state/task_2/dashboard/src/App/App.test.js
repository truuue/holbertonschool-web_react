import React from "react";
import { shallow } from "enzyme";
import App from "./App.js";
import Notifications from "../Notifications/Notifications.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import CourseList from "../CourseList/CourseList.js";
import { StyleSheetTestUtils } from "aphrodite";

describe("App Composant", function () {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("should App renders without crashing", function () {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should Notifications renders without crashing", function () {
    const listNotifications = [];
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("should Footer renders without crashing", function () {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should Login renders without crashing", function () {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should CourseList is not displayed when is not Log", function () {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList).exists()).toBeFalsy();
  });

  it("should verify that the default state for displayDrawer is false", function () {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  it("should verify that the default state for displayDrawer is false and after calling handleDisplayDrawer the state should be true", function () {
    const wrapper = shallow(<App isLoggedIn={true} />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state("displayDrawer")).toBe(true);
  });

  it("should verify that the default state for displayDrawer is false and after calling handleHideDrawer the state should be false", function () {
    const wrapper = shallow(<App isLoggedIn={true} />);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state("displayDrawer")).toBe(false);
  });
});

describe("App Composant when isLoggedIn is true", function () {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("should Login is displayed when is not Log", function () {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(Login).exists()).toBeTruthy();
  });

  it('pressing control+h calls logOut and alerts "Logging you out"', () => {
    const events = {};
    const logout = jest.fn();

    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });

    window.alert = jest.fn();

    shallow(<App logOut={logout} />);

    events.keydown({ key: "h", ctrlKey: true });

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(logout).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});

describe("App Component", function () {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("should render without crashing", function () {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have the default state for displayDrawer set to false", function () {
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  it("should update the state correctly when handleDisplayDrawer is called", function () {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state("displayDrawer")).toBe(true);
  });

  it("should update the state correctly when handleHideDrawer is called", function () {
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  it("should update the state correctly when handleLogIn is called", function () {
    const email = "test@example.com";
    const password = "password";
    wrapper.instance().handleLogIn(email, password);
    expect(wrapper.state("user")).toEqual({
      email: email,
      password: password,
      isLoggedIn: true,
    });
  });

  it("should update the state correctly when handleLogout is called", function () {
    wrapper.instance().handleLogout();
    expect(wrapper.state("user")).toEqual({
      email: "",
      password: "",
      isLoggedIn: false,
    });
  });

  it("should render Notifications component", function () {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it("should render Footer component", function () {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it("should render Login component when user is not logged in", function () {
    wrapper.setState({ user: { isLoggedIn: false } });
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it("should render CourseList component when user is logged in", function () {
    wrapper.setState({ user: { isLoggedIn: true } });
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });
});
