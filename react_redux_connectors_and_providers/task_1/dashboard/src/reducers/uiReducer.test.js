import { selectCourse } from '../actions/courseActionCreators';
import { displayNotificationDrawer } from '../actions/uiActionCreators';
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
});
