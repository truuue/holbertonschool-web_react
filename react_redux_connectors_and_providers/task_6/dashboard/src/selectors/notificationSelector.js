import { Map } from 'immutable';

export function filterTypeSelected(state) {
  return state.get('filter');
}

export function getNotifications(state) {
  return Map(state.get('notifications').get('messages'));
}

export function getUnreadNotifications(state) {
  return getNotifications(state).filter(notification => notification.isRead === false);
}
