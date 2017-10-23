import { combineReducers } from 'redux';
import charitiesReducer from './charities_reducer';
import charityReducer from './charity_reducer';
import favoritesReducer from './favorite_reducer';
import starReducer from './star_reducer';


const rootReducer = combineReducers({
  charitiesReducer,
  charityReducer,
  favoritesReducer,
  starReducer
});

export default rootReducer;
