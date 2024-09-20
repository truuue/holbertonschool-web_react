import {
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_TYPE_FILTER,
  MARK_AS_READ,
} from '../actions/notificationActionTypes';

const initialState = {
  notifications: [],
  filter: 'DEFAULT',
};

function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map((notification) => ({
          ...notification,
          isRead: false,
        })),
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    case MARK_AS_READ:
      if (action.type === MARK_AS_READ) {
        return {
          ...state,
          notifications: state.notifications.map((notification) => {
            if (notification.id === action.index) {
              return { ...notification, isRead: true };
            } else {
              return notification;
            }
          }),
        };
      }
    default:
      return state;
  }
}

export default notificationReducer;
