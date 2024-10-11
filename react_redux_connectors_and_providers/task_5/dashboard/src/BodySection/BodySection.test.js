import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('<BodySection />', () => {
  it('renders without crashing', () => {
    shallow(<BodySection title="test" />);
  });

  it('renders h2 title and children', () => {
    const title = 'test title';
    const childText = 'test children node';

    const wrapper = shallow(<BodySection title={title} ><p>{childText}</p></BodySection>);
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual(title);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toEqual(childText);
  });
});
