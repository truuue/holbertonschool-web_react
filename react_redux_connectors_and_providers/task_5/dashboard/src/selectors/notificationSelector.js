import { Map } from 'immutable';

export function filterTypeSelected(state) {
  return state.get('filter');
}

export function getNotifications(state) {
  return new Map(state.get('notifications'));
}

export function getUnreadNotifications(state) {
  return getNotifications(state).filter(notification => notification.isRead === false);
}
