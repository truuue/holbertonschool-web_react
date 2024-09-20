import { fromJS, Map } from 'immutable';
import courseReducer from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    const initialState = Map();
    const action = { type: 'UNKNOWN_ACTION' };
    const newState = courseReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const courses = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
    ];
    const action = { type: FETCH_COURSE_SUCCESS, courses };
    const newState = courseReducer(Map(), action);
    const expectedState = fromJS({
      1: { id: 1, name: 'Course 1', selected: false },
      2: { id: 2, name: 'Course 2', selected: false },
    });
    expect(newState).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE', () => {
    const initialState = fromJS({
      1: { id: 1, name: 'Course 1', selected: false },
      2: { id: 2, name: 'Course 2', selected: false },
    });
    const action = { type: SELECT_COURSE, index: '1' };
    const newState = courseReducer(initialState, action);
    const expectedState = initialState.setIn(['1', 'selected'], true);
    expect(newState).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE', () => {
    const initialState = fromJS({
      1: { id: 1, name: 'Course 1', selected: true },
      2: { id: 2, name: 'Course 2', selected: false },
    });
    const action = { type: UNSELECT_COURSE, index: '1' };
    const newState = courseReducer(initialState, action);
    const expectedState = initialState.setIn(['1', 'selected'], false);
    expect(newState).toEqual(expectedState);
  });
});
