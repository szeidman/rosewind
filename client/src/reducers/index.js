import { combineReducers } from 'redux';
import charitiesReducer from './charities_reducer';
import charityReducer from './charity_reducer';
import favoritesReducer from './favorite_reducer';


const rootReducer = combineReducers({
  charitiesReducer,
  charityReducer,
  favoritesReducer
});

export default rootReducer;
