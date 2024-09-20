import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';
import {
  markAsRead,
  setNotificationFilter,
} from '../actions/notificationActionCreators';

describe('notificationActionCreators', () => {
  it('should create an action to mark a notification as read', () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index: index,
    };
    expect(markAsRead(index)).toEqual(expectedAction);
  });

  it('should create an action to set the notification filter', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter: filter,
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });
});
