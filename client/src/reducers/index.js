import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import form from './form';

const rootReducer = combineReducers({
  user,
  flash,
  form,
});

export default rootReducer;
