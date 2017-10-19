import { combineReducers } from 'redux';
import charitiesReducer from './charity_reducer';

const rootReducer = combineReducers({
  charitiesIndex: charitiesReducer
});

export default rootReducer;
