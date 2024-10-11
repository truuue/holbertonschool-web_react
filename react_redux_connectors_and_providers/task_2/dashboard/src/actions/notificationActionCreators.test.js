import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { markAsRead, setNotificationFilter } from './notificationActionCreators';

describe('markAsRead()', () => {
  it('returns the correct action when passed 1', () => {
    const expectedResult = { type: MARK_AS_READ, index: 1 };

    expect(markAsRead(1)).toEqual(expectedResult);
  });
});

describe('setNotificationFilter()', () => {
  it('returns the correct action when passed DEFAULT filter', () => {
    const expectedResult = { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.DEFAULT };

    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(expectedResult);
  });
});
