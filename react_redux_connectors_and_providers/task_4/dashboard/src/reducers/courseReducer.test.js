import { Map } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import courseReducer, { initialState } from './courseReducer';

describe('uiReducer()', () => {
  it('returns the default state when no action is passed', () => {
    expect(courseReducer()).toEqual(initialState);
  });

  it('returns the action data when action `FETCH_COURSE_SUCCESS` is passed', () => {
    const fetch_data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const expected = new Map(fetch_data.map(course => [String(course.id), {...course, isSelected: false}]));
    expect(courseReducer(initialState, { type: FETCH_COURSE_SUCCESS, data: fetch_data })).toEqual(expected);
  });

  it('returns the correct data when action `SELECT_COURSE` is passed', () => {
    const state = {
      "1" : { id: 1, name: 'ES6', credit: 60, isSelected: false },
      "2": { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      "3": { id: 3, name: 'React', credit: 40, isSelected: false }
    };
    const expected = {...state };
    expected["2"].isSelected = true;
    expect(courseReducer(new Map(state), { type: SELECT_COURSE, index: 2 })).toEqual(new Map(expected));
  });

  it('returns the correct data when action `UNSELECT_COURSE` is passed', () => {
    const state = {
      "1" : { id: 1, name: 'ES6', credit: 60, isSelected: true },
      "2": { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      "3": { id: 3, name: 'React', credit: 40, isSelected: true }
    };
    const expected = {...state };
    expected["2"].isSelected = false;
    expect(courseReducer(new Map(state), { type: UNSELECT_COURSE, index: 2 })).toEqual(new Map(expected));
  });
});
