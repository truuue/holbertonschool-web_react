import { bindActionCreators } from 'redux';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index
  }
}

export function boundMarkAsRead(dispatch) {
  return bindActionCreators(markAsRead, dispatch);
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter
  }
}

export function boundSetNotificationFilter(dispatch) {
  return bindActionCreators(setNotificationFilter, dispatch);
}
