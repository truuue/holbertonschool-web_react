import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from './uiActionTypes';
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
} from './uiActionCreators';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('LOGIN', function () {
  it('should display the correct action object', function () {
    const email = 'val@gmail.com';
    const password = '123';
    const expectedAction = {
      type: LOGIN,
      user: { email, password },
    };
    expect(login(email, password)).toEqual(expectedAction);
  });
});

describe('LOGOUT', function () {
  it('should display the correct action object', function () {
    const expectedAction = {
      type: LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
  });
});

describe('DISPLAY_NOTIFICATION_DRAWER', function () {
  it('should display the correct action object', function () {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });
});

describe('HIDE_NOTIFICATION_DRAWER', function () {
  it('should display the correct action object', function () {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});

describe('loginRequest action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should dispatch LOGIN and LOGIN_SUCCESS if the API returns the right response', () => {
    fetchMock.getOnce('../../dist/login-success.json', {
      body: { success: true },
      headers: { 'content-type': 'application/json' },
    });

    const email = 'test@example.com';
    const password = 'test';
    const expectedActions = [
      { type: LOGIN, user: { email, password } },
      { type: LOGIN_SUCCESS },
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest(email, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch LOGIN and LOGIN_FAILURE if the API query fails', () => {
    fetchMock.getOnce('../../dist/login-success.json', 500);

    const email = 'test@example.com';
    const password = 'test';
    const expectedActions = [
      { type: LOGIN, user: { email, password } },
      { type: LOGIN_FAILURE },
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest(email, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
