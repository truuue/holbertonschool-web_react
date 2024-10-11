import { bindActionCreators } from 'redux';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_LOADING_STATE, SET_TYPE_FILTER } from './notificationActionTypes';

const fetch = require('node-fetch');

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

export function setLoadingState(loading) {
  return {
    type: SET_LOADING_STATE,
    loading
  }
}

export function boundSetLoadingState(dispatch) {
  return bindActionCreators(setLoadingState, dispatch);
}

export function setNotifications(notifications) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    notifications
  }
}

export function boundSetNotifications(dispatch) {
  return bindActionCreators(setNotifications, dispatch);
}

export function fetchNotifications() {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch('/notifications.json')
      .then((response) => response.json())
      .then((json) => dispatch(setNotifications(json)))
      .finally(() => dispatch(setLoadingState(false)));
  }
}
