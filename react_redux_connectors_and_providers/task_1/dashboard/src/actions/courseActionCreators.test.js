import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('selectCourse()', () => {
  it('returns the correct action when passed 1', () => {
    const expectedResult = { type: SELECT_COURSE, index: 1 };

    expect(selectCourse(1)).toEqual(expectedResult);
  });
});

describe('unSelectCourse()', () => {
  it('returns the correct action when passed 1', () => {
    const expectedResult = { type: UNSELECT_COURSE, index: 1 };

    expect(unSelectCourse(1)).toEqual(expectedResult);
  });
});
