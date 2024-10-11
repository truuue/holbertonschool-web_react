import { mount } from 'enzyme';
import { AppContext, defaultLogOut, defaultUser } from '../App/AppContext';
import Footer from './Footer';

describe('<Footer />', () => {
  let wrapper, context;

  describe('with default context', () => {
    beforeEach(() => {
      context = {
        user: defaultUser,
        logOut: defaultLogOut
      };

      wrapper = mount(
        <AppContext.Provider value={context}>
          <Footer />
        </AppContext.Provider>
      );
    });

    it('renders without crashing', () => { });

    it('renders the text "Copyright"', () => {
      expect(wrapper.text().includes('Copyright')).toBe(true);
    });

    it('does not render Contact link', () => {
      expect(wrapper.find('a')).toHaveLength(0);
    });
  });

  describe('with logged in context', () => {
    beforeEach(() => {
      context = {
        user: {
          email: 'a@a.com',
          password: 'azerty1234',
          isLoggedIn: true
        },
        logOut: defaultLogOut
      };

      wrapper = mount(
        <AppContext.Provider value={context}>
          <Footer />
        </AppContext.Provider>
      );
    });

    it('does render Contact link', () => {
      expect(wrapper.find('a')).toHaveLength(1);
    });
  });
});
