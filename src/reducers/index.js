import { combineReducers } from 'redux';
import todos from './todos';
import loading from './loading';

const rootReducer = combineReducers({
  todos,
  loading
});

export default rootReducer;
