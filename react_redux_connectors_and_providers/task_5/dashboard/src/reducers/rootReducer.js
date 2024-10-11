import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer
});
