import { Map } from 'immutable';
import *  as ActionTypes from '../actions/uiActionTypes';

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null
});

export default function uiReducer(state = initialState, action = { type: null }) {
  switch (action.type) {
    case ActionTypes.DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case ActionTypes.HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case ActionTypes.LOGIN:
      return state.set('user', action.user);
    case ActionTypes.LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);
    case ActionTypes.LOGIN_FAILURE:
    case ActionTypes.LOGOUT:
      return state.set('isUserLoggedIn', false).set('user', null);
    default:
      return state;
  }
}
