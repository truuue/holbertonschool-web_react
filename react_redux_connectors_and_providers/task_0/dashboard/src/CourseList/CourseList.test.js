import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('<CourseList />', () => {
  let wrapper;

  describe('listCourses = default', () => {
    beforeEach(() => {
      wrapper = shallow(<CourseList/>);
    });

    it('renders component without crashing', () => { });

    it('renders the 5 different rows', () => {
      expect(wrapper.find('CourseListRow')).toHaveLength(3);
    });

    it('renders the "No Course Available" row', () => {
      expect(wrapper.html().includes('No course available yet')).toBe(true);
    });
  });

  describe('listCourses = []', () => {
    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={[]}/>);
    });

    it('renders component without crashing', () => { });

    it('renders the 5 different rows', () => {
      expect(wrapper.find('CourseListRow')).toHaveLength(3);
    });

    it('renders the "No Course Available" row', () => {
      expect(wrapper.html().includes('No course available yet')).toBe(true);
    });
  });

  describe('listCourses = [...]', () => {
    const listCourses = [
      { id: 1, name: 'c1', credit: 10 },
      { id: 2, name: 'c2', credit: 20 },
      { id: 3, name: 'c3', credit: 30 }
    ];

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={listCourses}/>);
    });

    it('renders component without crashing', () => { });

    it('renders 5 different rows', () => {
      expect(wrapper.find('CourseListRow')).toHaveLength(5);
    });

    it('renders each course correctly', () => {
      listCourses.forEach(item => {
        const row = wrapper.find('CourseListRow').filterWhere((n) => n.key() === item.id.toString());
        expect(row).toHaveLength(1);
        expect(row.prop('textFirstCell')).toEqual(item.name);
        expect(row.prop('textSecondCell')).toEqual(item.credit);
      });
    });
  });
});
