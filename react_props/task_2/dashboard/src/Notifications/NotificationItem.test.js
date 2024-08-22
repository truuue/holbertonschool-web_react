import { shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";

describe("<NotificationItem />", () => {
  it("Verify that the basic rendering of the component works without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Verify that by passing dummy type and value props, it renders the correct html", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    wrapper.update();
    const listItems = wrapper.find("li");
    expect(listItems).toHaveLength(1);
    expect(listItems.text()).toEqual("test");
    expect(listItems.prop("data-notification-type")).toEqual("default");
  });

  it("Verify that by passing a dummy html prop, it renders the correct html", () => {
    const text = "Here is the list of notifications";
    const wrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );
    wrapper.update();
    const listItems = wrapper.find("li");
    expect(listItems.html()).toEqual("<li><u>test</u></li>");
  });
});
