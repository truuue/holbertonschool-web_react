import { shallow } from 'enzyme';
import { Notifications } from './Notifications';

describe('<Notifications />', () => {
  let wrapper;

  describe('displayDrawer=false', () => {
    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={false} />);
    });

    it('renders without crashing', () => { });

    it('renders only menuItem', () => {
      const div = wrapper.find('div');
      expect(div).toHaveLength(1);
      expect(div.text()).toEqual('Your notifications');
    });
  });

  describe('displayDrawer=true', () => {
    describe('listNotifications = []', () => {
      beforeEach(() => {
        wrapper = shallow(<Notifications displayDrawer={true} />);
      });

      it('renders without crashing', () => { });

      it('renders row "No new notification for now"', () => {
        const item = wrapper.find('NotificationItem');
        expect(item).toHaveLength(1);
        expect(item.prop('value')).toEqual('No new notification for now');
      });

      it('does not render p>Here is the list of notifications', () => {
        expect(wrapper.find('p')).toHaveLength(0);
        expect(wrapper.text()).not.toContain('Here is the list of notifications');
      });
    });

    describe('listNotifications = [...]', () => {
      const listNotifications = {
        '1': { id: 1, type: 'default', value: 'test1' },
        '2': { id: 2, type: 'urgent', value: 'test2' },
        '3': {
          id: 3, type: 'urgent', html: {
            __html: '<u>test3</u>'
          }
        }
      };

      beforeEach(() => {
        wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
      });

      it('renders three NotificationItems', () => {
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
      });

      it('renders the text `Here is the list of notifications`', () => {
        expect(wrapper.find({ children: 'Here is the list of notifications' })).toHaveLength(1);
      });

      it('renders the items correctly', () => {
        Object.values(listNotifications).forEach(notification => {
          const item = wrapper.find('NotificationItem').filterWhere((n) => n.key() === notification.id.toString());
          expect(item).toHaveLength(1);
          expect(item.prop('type')).toEqual(notification.type);
          if (notification.value)
            expect(item.prop('value')).toEqual(notification.value);
          if (notification.html)
            expect(item.prop('html')).toEqual(notification.html);
        });
      });
    });
  });

  it('does not rerender when updating the props with the same list', () => {
    const listNotifications = {
      '1': { id: 1, type: 'default', value: 'test1' }
    };

    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const renderMock = jest.spyOn(wrapper.instance(), 'render');

    wrapper.setProps({ listNotifications: listNotifications });
    expect(renderMock.mock.calls.length).toEqual(0);

    renderMock.mockRestore();
  });

  it('does rerender when updating the props with a bigger list', () => {
    const listNotifications = {
      '1': { id: 1, type: 'default', value: 'test1' }
    };

    const biggerList = {
      ...listNotifications,
      '2': { id: 2, type: 'urgent', value: 'test2' }
    };

    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const renderMock = jest.spyOn(wrapper.instance(), 'render');

    wrapper.setProps({ listNotifications: biggerList });
    expect(renderMock.mock.calls.length).toEqual(1);

    renderMock.mockRestore();
  });

  it('calls handleDisplayDrawer when menu item is called', () => {
    const handleDisplayDrawerMock = jest.fn();
    wrapper = shallow(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawerMock} />);

    expect(handleDisplayDrawerMock.mock.calls).toHaveLength(0);
    wrapper.find('[aria-label="Open"]').simulate('click');
    expect(handleDisplayDrawerMock.mock.calls).toHaveLength(1);
  });

  it('calls handleHideDrawer when menu item is called', () => {
    const handleHideDrawerMock = jest.fn();
    wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawerMock} />);

    expect(handleHideDrawerMock.mock.calls).toHaveLength(0);
    wrapper.find('[aria-label="Close"]').simulate('click');
    expect(handleHideDrawerMock.mock.calls).toHaveLength(1);
  });
});
