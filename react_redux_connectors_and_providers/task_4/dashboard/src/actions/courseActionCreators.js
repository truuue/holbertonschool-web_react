import { bindActionCreators } from 'redux';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index
  };
}

export function boundSelectCourse(dispatch) {
  return bindActionCreators(selectCourse, dispatch);
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index
  };
}

export function boundUnSelectCourse(dispatch) {
  return bindActionCreators(unSelectCourse, dispatch);
}
