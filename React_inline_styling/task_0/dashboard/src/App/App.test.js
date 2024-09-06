import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  let wrapper;

  describe('isLoggedIn = false', () => {
    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('renders without crashing', () => { });

    it('contains the Notifications component', () => {
      expect(wrapper.find('Notifications')).toHaveLength(1);
    });

    it('contains the Header component', () => {
      expect(wrapper.find('Header')).toHaveLength(1);
    });

    it('contains the Footer component', () => {
      expect(wrapper.find('Footer')).toHaveLength(1);
    });

    it('contains the Login component', () => {
      expect(wrapper.find('Login')).toHaveLength(1);
    });

    it('does not contain the CourseList component', () => {
      expect(wrapper.find('CourseList')).toHaveLength(0);
    });
  });

  describe('isLoggedIn = true', () => {
    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });

    it('does not contain the Login component', () => {
      expect(wrapper.find('Login')).toHaveLength(0);
    });

    it('contains the CourseList component', () => {
      expect(wrapper.find('CourseList')).toHaveLength(1);
    });
  });

  describe('logOut event', () => {
    it('calls logOut prop', () => {
      const logOutMock = jest.fn();
      const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

      shallow(<App logOut={logOutMock} />);
      window.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'h',
        ctrlKey: true,
      }));

      expect(logOutMock).toBeCalled();
      expect(alertSpy).toBeCalledWith('Logging you out');

      alertSpy.mockRestore();
    });
  });
});
