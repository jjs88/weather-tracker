import { combineReducers } from 'redux';
import currentReducer from './current';
import pinnedReducer from './pinned';

const rootReducers = combineReducers({
  current: currentReducer,
  pinned: pinnedReducer
});

export default rootReducers;