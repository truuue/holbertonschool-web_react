import { selectCourse } from '../actions/courseActionCreators';
import { displayNotificationDrawer, login } from '../actions/uiActionCreators';
import uiReducer, { initialState } from './uiReducer';

describe('uiReducer()', () => {
  it('returns the default state when no action is passed', () => {
    expect(uiReducer()).toEqual(initialState);
  });

  it('returns the default state when action `SELECT_COURSE` is passed', () => {
    expect(uiReducer(initialState, selectCourse(0))).toEqual(initialState);
  });

  it('modifies isNotificationDrawerVisible when action `DISPLAY_NOTIFICATION_DRAWER` is passed', () => {
    const state = uiReducer(initialState, displayNotificationDrawer()).toJS();
    expect(state.isNotificationDrawerVisible).toEqual(true);
  });

  it('set user when action `LOGIN` is passed', () => {
    const email = 'a@a.com';
    const password = 'azerty1234';
    const expected = { email, password };

    const state = uiReducer(initialState, login(email, password)).toJS();
    expect(state.user).toEqual(expected);
  });
});
