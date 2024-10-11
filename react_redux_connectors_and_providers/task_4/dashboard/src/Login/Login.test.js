import Login from './Login';
import { shallow, mount } from 'enzyme';

describe('<Login />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('renders without crashing', () => { });

  it('renders 3 input tags and 2 label tags', () => {
    expect(wrapper.find('input')).toHaveLength(3);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  describe('form submit button', () => {
    it('is disabled by default', () => {
      const submitButton = wrapper.find('input[type="submit"]');
      expect(submitButton.prop('disabled')).toBe(true);
    });

    it('is enabled after changing the value of both input', () => {
      wrapper = mount(<Login />);
      const emailInput = wrapper.find('input[type="email"]');
      const passwordInput = wrapper.find('input[type="password"]');

      emailInput.simulate('change', { target: { value: 'test@email.com' } });
      expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);

      passwordInput.simulate('change', { target: { value: 'azerty1234'} });
      expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
    });
  });
});
