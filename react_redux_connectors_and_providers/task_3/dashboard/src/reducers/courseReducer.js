import { Map, setIn } from 'immutable';
import * as ActionTypes from '../actions/courseActionTypes';
import coursesNormalizer from '../schema/courses';

export const initialState = new Map();

export default function courseReducer(state = initialState, action = { type: null }) {
  switch (action.type) {
    case ActionTypes.FETCH_COURSE_SUCCESS:
      const data = action.data.map(course => ({
        ...course,
        isSelected: false
      }));
      return state.mergeDeep(coursesNormalizer(data)['entities']['courses']);
    case ActionTypes.SELECT_COURSE:
      return setIn(state, [String(action.index), 'isSelected'], true);
    case ActionTypes.UNSELECT_COURSE:
      return setIn(state, [String(action.index), 'isSelected'], false);
    default:
      return state;
  }
}
