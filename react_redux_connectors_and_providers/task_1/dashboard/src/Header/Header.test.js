import { shallow } from 'enzyme';
import { withContext } from 'shallow-with-context';
import { defaultUser, defaultLogOut } from '../App/AppContext';
import Header from './Header';

describe('<Header />', () => {
  let wrapper, context;

  describe('with default context', () => {
    beforeEach(() => {
      context = {
        user: defaultUser,
        logOut: defaultLogOut
      };

      const HeaderWithContext = withContext(Header, context);
      wrapper = shallow(<HeaderWithContext />, { context });
    });

    it('renders without crashing', () => { });

    it('renders img and h1 tags', () => {
      expect(wrapper.find('img')).toHaveLength(1);
      expect(wrapper.find('h1')).toHaveLength(1);
    });

    it('does not render logoutSection', () => {
      expect(wrapper.find('#logoutSection')).toHaveLength(0);
    });
  });

  describe('with logged in context', () => {
    let logOutMock = jest.fn();

    beforeEach(() => {
      context = {
        user: {
          email: 'a@a.com',
          password: 'azerty1234',
          isLoggedIn: true
        },
        logOut: logOutMock
      };

      const HeaderWithContext = withContext(Header, context);
      wrapper = shallow(<HeaderWithContext />, { context });
    });

    afterEach(() => {
      logOutMock.mockClear();
    });

    it('renders logoutSection', () => {
      expect(wrapper.find('#logoutSection')).toHaveLength(1);
    });

    it('calls logOut function when logout link is clicked', () => {
      const logoutLink = wrapper.find('a').at(0);
      logoutLink.simulate('click');

      expect(logOutMock).toHaveBeenCalled();
    });
  });
});
