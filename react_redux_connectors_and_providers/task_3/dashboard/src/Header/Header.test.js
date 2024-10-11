import { shallow } from 'enzyme';
import { Header } from './Header';

describe('<Header />', () => {
  let wrapper;

  describe('default', () => {
    beforeEach(() => {
      wrapper = shallow(<Header />);
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

  describe('with logged in props', () => {
    const logOutMock = jest.fn();

    beforeEach(() => {
      const props = {
        user: {
          email: 'a@a.com',
          password: 'azerty1234',
          isLoggedIn: true
        },
        logout: logOutMock
      };

      wrapper = shallow(<Header {...props}/>);
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
