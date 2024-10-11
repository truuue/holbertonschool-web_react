import { fromJS } from 'immutable';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';
import ConnectedHeader from '../Header/Header';
import ConnectedFooter from '../Footer/Footer';

describe('<App />', () => {
  let wrapper;

  describe('default', () => {
    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('renders without crashing', () => { });

    it('contains the Notifications component', () => {
      expect(wrapper.find('Notifications')).toHaveLength(1);
    });

    it('contains the Header component', () => {
      expect(wrapper.find(ConnectedHeader)).toHaveLength(1);
    });

    it('contains the Footer component', () => {
      expect(wrapper.find(ConnectedFooter)).toHaveLength(1);
    });

    it('contains the Login component', () => {
      expect(wrapper.find('Login')).toHaveLength(1);
    });

    it('does not contain the CourseList component', () => {
      expect(wrapper.find('CourseList')).toHaveLength(0);
    });
  });

  describe('state.listNotifications', () => {
    it('removes a notification when markNotificationAsRead is called', () => {
      const listMock = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
      ]
      wrapper.setState({ listNotifications: listMock });

      wrapper.instance().markNotificationAsRead(1);
      expect(wrapper.state('listNotifications')).toHaveLength(1);
      expect(wrapper.state('listNotifications').filter(n => n.id === 1)).toHaveLength(0);
    });
  })

  describe('mapStateToProps', () => {
    it('returns the right object when passing a state', () => {
      const state = {
        ui: fromJS({
          isNotificationDrawerVisible: false,
          isUserLoggedIn: true,
          user: {}
        })
      };
      const expected = {
        isLoggedIn: true,
        displayDrawer: false,
        user: fromJS({})
      };
      expect(mapStateToProps(state)).toEqual(expected);
    });
  });
});
