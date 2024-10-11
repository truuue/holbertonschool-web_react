import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from '../actions/notificationActionTypes';
import notificationReducer, { initialState } from './notificationReducer';

describe('notificationReducer()', () => {
  const notifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", value: "New data available" },
  ];
  const unreadNotifications = {};
  notifications.forEach(n => unreadNotifications[n.id] = { ...n, isRead: false });

  it('returns the default state when no action is passed', () => {
    expect(notificationReducer()).toEqual(initialState);
  });

  it('returns the correct state when action `FETCH_NOTIFICATIONS_SUCCESS` is passed', () => {
    const expected = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: unreadNotifications,
    };
    expect(notificationReducer(initialState, { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications }).toJS()).toEqual(expected);
  });

  it('returns the correct state when action `MARK_AS_READ` is passed', () => {
    const state = initialState.set('notifications', unreadNotifications);

    const expectedNotifications = { ...unreadNotifications };
    expectedNotifications['2'].isRead = true;
    const expected = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: expectedNotifications,
    };
    expect(notificationReducer(state, { type: MARK_AS_READ, index: 2 }).toJS()).toEqual(expected);
  });

  it('returns the correct state when action `SET_TYPE_FILTER` is passed', () => {
    const expected = initialState.set('filter', NotificationTypeFilters.URGENT);
    expect(notificationReducer(initialState, { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.URGENT })).toEqual(expected);
  });
});
