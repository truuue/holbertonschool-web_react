import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders the correct html by passing type and value props', () => {
    const type = 'default';
    const value = 'test';
    const item = shallow(<NotificationItem type={type} value={value}></NotificationItem>);
    expect(item.is(`[data-notification-type="${type}"]`)).toBe(true);
    expect(item.text()).toBe(value);
  });

  it('renders the correct html by passing a html prop', () => {
    const html = '<u>test</u>';
    const item = shallow(<NotificationItem html={{__html: html}}></NotificationItem>);
    expect(item.html().includes(html)).toBe(true);
  });

  it('calls markAsRead prop when clicked', () => {
    const markAsReadMock = jest.fn();

    const wrapper = shallow(<NotificationItem markAsRead={markAsReadMock} />);
    wrapper.find('li').simulate('click');

    expect(markAsReadMock).toBeCalled();
  });
});
