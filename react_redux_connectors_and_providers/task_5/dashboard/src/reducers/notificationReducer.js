import { Map, set, setIn } from 'immutable';
import * as ActionTypes from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = Map({
  notifications: Map(),
  filter: ActionTypes.NotificationTypeFilters.DEFAULT,
  loading: false,
});

export default function notificationReducer(state = initialState, action = { type: null }) {
  switch (action.type) {
    case ActionTypes.FETCH_NOTIFICATIONS_SUCCESS:
      const data = action.notifications.map(n => ({
        ...n,
        isRead: false
      }));
      const normalized = {
        notifications : Map(notificationsNormalizer(data).entities)
      };
      return state.mergeDeep(normalized);
    case ActionTypes.MARK_AS_READ:
      return setIn(state, ['notifications', String(action.index), 'isRead'], true);
    case ActionTypes.SET_TYPE_FILTER:
      return set(state, 'filter', action.filter);
    case ActionTypes.SET_LOADING_STATE:
      return set(state, 'loading', action.loading);
    default:
      return state;
  }
}
