import { Map, set, setIn } from 'immutable';
import * as ActionTypes from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = new Map({
  notifications: {},
  filter: ActionTypes.NotificationTypeFilters.DEFAULT
});

export default function notificationReducer(state = initialState, action = { type: null }) {
  switch (action.type) {
    case ActionTypes.FETCH_NOTIFICATIONS_SUCCESS:
      const data = action.data.map(n => ({
        ...n,
        isRead: false
      }));
      const normalized = {'notifications' : notificationsNormalizer(data).entities.notifications};
      return state.mergeDeep(normalized);
    case ActionTypes.MARK_AS_READ:
      return setIn(state, ['notifications', String(action.index), 'isRead'], true);
    case ActionTypes.SET_TYPE_FILTER:
      return set(state, 'filter', action.filter);
    default:
      return state;
  }
}
