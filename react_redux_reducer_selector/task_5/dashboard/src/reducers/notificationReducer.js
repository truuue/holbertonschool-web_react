import {
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_TYPE_FILTER,
  MARK_AS_READ,
} from '../actions/notificationActionTypes';
import { Map, fromJS } from 'immutable';
import { notificationsNormalizer } from '../utils/notificationsNormalizer';

const initialState = Map({
  notifications: Map(),
  filter: 'DEFAULT',
});

function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedNotifications = notificationsNormalizer(action.data);
      return state.merge({
        notifications: fromJS(normalizedNotifications),
      });
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case MARK_AS_READ:
      return state.set(['notifications', action.index, 'isRead'], true);
    default:
      return state;
  }
}

export default notificationReducer;
