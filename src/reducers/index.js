import { combineReducers } from 'redux';
import todos from './todos';
import loading from './loading';
import { firebaseStateReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  todos,
  loading,
  firebase: firebaseStateReducer
});

export default rootReducer;
