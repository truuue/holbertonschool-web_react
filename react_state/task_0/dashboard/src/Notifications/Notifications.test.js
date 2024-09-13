import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from "aphrodite";
import { func } from "prop-types";

describe("Notification Composant displayDrawers is true", function () {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  let listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
  ];

  it("should Notifications renders without crashing", function () {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("should renders the text <<Here is the list of notifications>>", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.contains("Here is the list of notifications")).toEqual(true);
  });

  it("should Notifications is being displayed when displayDrawer is true", function () {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find(".Notifications_d7p2x2").exists()).toBeTruthy();
  });

  it("should menuItem is being displayed when displayDrawer is true", function () {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find(".Notifications_d7p2x2").exists()).toBeTruthy();
  });

  it("renders correctly with an empty array or without listNotifications property", () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
    expect(wrapper.contains("No new notification for now")).toEqual(true);
  });

  it("renders list of notifications correctly with the right number of NotificationItem", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find(NotificationItem).length).toEqual(
      listNotifications.length
    );
  });

  it('does not display "Here is the list of notifications" message when listNotifications is empty', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
    expect(wrapper.contains("No new notification for now")).toEqual(true);
  });

  it("clicking on the menu item calls handleDisplayDrawer", function () {
    const handleHideDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={handleHideDrawerMock}
      />
    );
    const button = wrapper.find("button");
    button.simulate("click");
    expect(handleHideDrawerMock).toHaveBeenCalled();
    jest.restoreAllMocks();
  });
});

describe("Notification Composant displayDrawers is False", function () {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  let listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
  ];

  it("should menu item is being displayed when displayDrawer is false", function () {
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find(".menuItem").exists()).toBeFalsy();
  });

  it("should Notifications is not being displayed when displayDrawer is false", function () {
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find(".Notifications").exists()).toBeFalsy();
  });

  it("clicking on the menu item calls handleDisplayDrawer", function () {
    const handleDisplayDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        listNotifications={[]}
        handleDisplayDrawer={handleDisplayDrawerMock}
        handleHideDrawer={() => {}}
      />
    );
    const button = wrapper
      .find("p")
      .filterWhere((node) => node.text() === "Your notifications");
    button.simulate("click");
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
    jest.restoreAllMocks();
  });
});

describe("markAsRead fcuntion", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("console.log", () => {
    const wrapper = shallow(<Notifications displayDrawer />);

    console.log = jest.fn();

    const notifications = wrapper.instance();
    const id = 3;

    notifications.markAsRead(id);

    expect(console.log).toHaveBeenCalledWith(
      `Notification ${id} has been marked as read`
    );

    jest.restoreAllMocks();
  });
});

describe("<Notifications />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("should not rerender with the same list of notifications", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "Notification 1", html: undefined },
      { id: 2, type: "urgent", value: "Notification 2", html: undefined },
    ];
    const wrapper = shallow(
      <Notifications listNotifications={listNotifications} />
    );
    const shouldUpdate = wrapper
      .instance()
      .shouldComponentUpdate({ listNotifications });
    expect(shouldUpdate).toBe(false);
  });

  it("should rerender with a longer list of notifications", () => {
    const initialList = [
      { id: 1, type: "default", value: "Notification 1", html: undefined },
    ];
    const updatedList = [
      { id: 1, type: "default", value: "Notification 1", html: undefined },
      { id: 2, type: "urgent", value: "Notification 2", html: undefined },
    ];
    const wrapper = shallow(<Notifications listNotifications={initialList} />);
    const shouldUpdate = wrapper
      .instance()
      .shouldComponentUpdate({ listNotifications: updatedList });
    expect(shouldUpdate).toBe(true);
  });

  it("should render correct number of NotificationItem components", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "Notification 1", html: undefined },
      { id: 2, type: "urgent", value: "Notification 2", html: undefined },
    ];
    const wrapper = shallow(
      <Notifications listNotifications={listNotifications} />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(
      listNotifications.length
    );
  });
});

describe("<Notifications />", () => {
  it("appelle handleDisplayDrawer quand on clique sur le menu", () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawer} />
    );
    wrapper.find(".menuItem").simulate("click");
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it("appelle handleHideDrawer quand on clique sur le bouton de fermeture", () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />
    );
    wrapper.find("button").simulate("click");
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
