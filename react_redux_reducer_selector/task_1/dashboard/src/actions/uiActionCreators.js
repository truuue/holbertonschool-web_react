import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
} from './uiActionTypes';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

export const logout = () => ({
  type: LOGOUT,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGOUT_SUCCESS,
});

export function loginRequest(email, password) {
  dispatch(login(email, password));
  fetch('../../dist/login-success.json')
    .then((response) => {
      return response.json();
    })
    .then(() => {
      dispatch(loginSuccess());
    })
    .catch(() => {
      dispatch(loginFailure());
    });
}

export function simulateLoginFailure() {
  return (dispatch) => {
    dispatch(loginRequest('test@example.com', 'password'));
    fetchMock.getOnce('../../dist/login-success.json', {
      body: { success: false },
      headers: { 'content-type': 'application/json' },
    });
  };
}

export const boundLogin = (dispatch) => {
  return bindActionCreators({ login }, dispatch);
};

export const boundLogout = (dispatch) => {
  return bindActionCreators({ logout }, dispatch);
};

export const boundDisplayNotificationDrawer = (dispatch) => {
  return bindActionCreators({ displayNotificationDrawer }, dispatch);
};

export const boundHideNotificationDrawer = (dispatch) => {
  return bindActionCreators({ hideNotificationDrawer }, dispatch);
};

export const boundLoginRequest = (dispatch) => {
  return bindActionCreators({ loginRequest }, dispatch);
};
