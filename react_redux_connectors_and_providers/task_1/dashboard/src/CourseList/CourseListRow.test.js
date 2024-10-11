import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  describe('isHeader = true', () => {
    it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test"></CourseListRow>);
      const cells = wrapper.find('th');
      expect(cells).toHaveLength(1);
      expect(cells.first().is('[colSpan="2"]')).toBe(true);
    });

    it('renders two cells when textSecondCell is present', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2"></CourseListRow>);
      expect(wrapper.find('th')).toHaveLength(2);
    });
  });

  describe('isHeader = false', () => {
    it('renders correctly two td elements within a tr element', () => {
      const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test2"></CourseListRow>);
      const row = wrapper.find('tr');
      expect(row).toHaveLength(1);
      expect(row.find('td')).toHaveLength(2);
    });
  });
});
