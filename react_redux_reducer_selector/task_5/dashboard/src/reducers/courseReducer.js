import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import { fromJS, Map } from 'immutable';

const initialState = Map();

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedCourses = fromJS(
        action.courses.reduce((acc, course) => {
          acc[course.id] = { ...course, selected: false };
          return acc;
        }, {})
      );
      return state.merge(normalizedCourses);
    case SELECT_COURSE:
      return state.setIn([action.index, 'selected'], true);
    case UNSELECT_COURSE:
      return state.setIn([action.index, 'selected'], false);
    default:
      return state;
  }
};

export default courseReducer;
