import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { Map } from 'immutable';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  });

  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' })).toEqual(
      initialState
    );
  });

  it('should correctly change the isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });
});
