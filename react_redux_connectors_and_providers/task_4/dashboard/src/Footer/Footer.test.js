import { shallow } from 'enzyme';
import { Footer } from './Footer';

describe('<Footer />', () => {
  let wrapper;

  describe('default', () => {
    beforeEach(() => {
      wrapper = shallow(<Footer />);
    });

    it('renders without crashing', () => { });

    it('renders the text "Copyright"', () => {
      expect(wrapper.text().includes('Copyright')).toBe(true);
    });

    it('does not render Contact link', () => {
      expect(wrapper.find('a')).toHaveLength(0);
    });
  });

  describe('with logged in props', () => {
    beforeEach(() => {
      const props = {
        isLoggedIn: true,
        user: {
          email: 'a@a.com',
          password: 'azerty1234',
          isLoggedIn: true
        }
      };

      wrapper = shallow(<Footer {...props}/>);
    });

    it('does render Contact link', () => {
      expect(wrapper.find('a')).toHaveLength(1);
    });
  });
});
