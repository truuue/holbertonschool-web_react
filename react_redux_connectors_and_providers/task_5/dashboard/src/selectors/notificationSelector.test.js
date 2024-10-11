import { fromJS } from 'immutable';
import { setNotificationFilter } from '../actions/notificationActionCreators';
import notificationReducer from '../reducers/notificationReducer';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

const initialState = fromJS({
  filter: 'default',
  notifications: {
    '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
    '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
    '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false },
  },
});

describe('filterTypeSelected()', () => {
  it('returns the value of the filter in the state', () => {
    const action = setNotificationFilter('URGENT');
    const state = notificationReducer(initialState, action);

    expect(filterTypeSelected(state)).toEqual('URGENT');
  });
});

describe('getNotifications()', () => {
  it('returns the list of notifications in the state', () => {
    const expected = fromJS(initialState.get('notifications'));
    expect(getNotifications(initialState)).toEqual(expected);
  });
});

describe('getUnreadNotifications()', () => {
  it('returns the list of unread notifications in the state', () => {
    const expected = fromJS(initialState.get('notifications')).filter(n => n.isRead === false);
    expect(getUnreadNotifications(initialState)).toEqual(expected);
  });
});
