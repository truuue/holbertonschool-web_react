import courseReducer from '../reducers/courseReducer';
import {
  FETCH_COURSES,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN_ACTION' };
    const newState = courseReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  it('should handle FETCH_COURSES', () => {
    const courses = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
    ];
    const action = { type: FETCH_COURSES, courses };
    const newState = courseReducer([], action);
    expect(newState).toEqual(courses);
  });

  it('should handle SELECT_COURSE', () => {
    const courses = [
      { id: 1, name: 'Course 1', selected: false },
      { id: 2, name: 'Course 2', selected: false },
    ];
    const action = { type: SELECT_COURSE, index: 1 };
    const newState = courseReducer(courses, action);
    expect(newState).toEqual([
      { id: 1, name: 'Course 1', selected: true },
      { id: 2, name: 'Course 2', selected: false },
    ]);
  });

  it('should handle UNSELECT_COURSE', () => {
    const courses = [
      { id: 1, name: 'Course 1', selected: true },
      { id: 2, name: 'Course 2', selected: false },
    ];
    const action = { type: UNSELECT_COURSE, index: 1 };
    const newState = courseReducer(courses, action);
    expect(newState).toEqual([
      { id: 1, name: 'Course 1', selected: false },
      { id: 2, name: 'Course 2', selected: false },
    ]);
  });
});
