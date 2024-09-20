import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('selectCourse', () => {
  it('should return the correct action object', () => {
    const expectedAction = {
      type: SELECT_COURSE,
      index: 1,
    };
    const action = selectCourse(1);
    expect(action).toEqual(expectedAction);
  });
});

describe('unSelectCourse', () => {
  it('should return the correct action object', () => {
    const expectedAction = {
      type: UNSELECT_COURSE,
      index: 1,
    };
    const action = unSelectCourse(1);
    expect(action).toEqual(expectedAction);
  });
});
