import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('<BodySectionWithMarginBottom />', () => {
  it('renders without crashing', () => {
    shallow(<BodySectionWithMarginBottom title="test" />);
  });

  it('renders a BodySection with the correct props', () => {
    const title = 'test title';
    const childNode = <p>test children node</p>;

    const wrapper = shallow(<BodySectionWithMarginBottom title={title}>{childNode}</BodySectionWithMarginBottom>);
    const bodySection = wrapper.find('BodySection');
    expect(bodySection).toHaveLength(1);
    expect(bodySection.prop('title')).toEqual(title);
    expect(bodySection.prop('children')).toEqual(childNode);
  });
});
