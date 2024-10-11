import { thunk } from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './uiActionTypes';

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest
} from './uiActionCreators';

describe('login()', () => {
  it('returns the correct action when passed email and password', () => {
    const email = 'a@a.com';
    const password = 'azerty1234';
    const expectedResult = { type: LOGIN, user: { email, password } };

    expect(login(email, password)).toEqual(expectedResult);
  });
});

describe('logout()', () => {
  it('returns the correct action', () => {
    const expectedResult = { type: LOGOUT };

    expect(logout()).toEqual(expectedResult);
  });
});

describe('displayNotificationDrawer()', () => {
  it('returns the correct action', () => {
    const expectedResult = { type: DISPLAY_NOTIFICATION_DRAWER };

    expect(displayNotificationDrawer()).toEqual(expectedResult);
  });
});

describe('hideNotificationDrawer()', () => {
  it('returns the correct action', () => {
    const expectedResult = { type: HIDE_NOTIFICATION_DRAWER };

    expect(hideNotificationDrawer()).toEqual(expectedResult);
  });
});

describe('loginRequest()', () => {
  let middlewares, mockStore;
  beforeEach(() => {
    middlewares = [thunk];
    mockStore = configureStore(middlewares);
  });

  afterEach(() => {
    fetchMock.resetMocks();
  })

  it('returns the correct response when it suceeds', () => {
    const email = 'a@a.com';
    const password = 'azerty1234';
    fetch.mockResponseOnce(JSON.stringify({
      email,
      success: true
    }));

    const expectedActions = [
      { type: LOGIN, user: { email, password } },
      { type: LOGIN_SUCCESS }
    ];

    const store = mockStore({});
    return store.dispatch(loginRequest(email, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('returns the correct response when it fails', () => {
    const email = 'a@a.com';
    const password = 'azerty1234';
    fetchMock.mockReject(new Error('404'));

    const expectedActions = [
      { type: LOGIN, user: { email, password } },
      { type: LOGIN_FAILURE }
    ];

    const store = mockStore({});
    return store.dispatch(loginRequest(email, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
