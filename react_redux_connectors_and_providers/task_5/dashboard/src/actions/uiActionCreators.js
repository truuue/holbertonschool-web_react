import { bindActionCreators } from 'redux';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './uiActionTypes';

const fetch = require('node-fetch');

export function login(email, password) {
  return {
    type: LOGIN,
    user: {
      email,
      password
    }
  };
}

export function boundLogin(dispatch) {
  return bindActionCreators(login, dispatch);
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function boundLogout(dispatch) {
  return bindActionCreators(logout, dispatch);
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function boundDisplayNotificationDrawer(dispatch) {
  return bindActionCreators(displayNotificationDrawer, dispatch);
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export function boundHideNotificationDrawer(dispatch) {
  return bindActionCreators(hideNotificationDrawer, dispatch);
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function boundLoginSuccess(dispatch) {
  return bindActionCreators(loginSuccess, dispatch);
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export function boundLoginFailure(dispatch) {
  return bindActionCreators(loginFailure, dispatch);
}

export function loginRequest(email, password) {
  return async (dispatch) => {
    dispatch(login(email, password));
    return fetch('/login-success.json')
      .then(() => dispatch(loginSuccess()))
      .catch(() => dispatch(loginFailure()));
  }
}
