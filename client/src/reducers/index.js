import { combineReducers } from 'redux';
import charitiesReducer from './charity_reducer';
import favoritesReducer from './favorite_reducer';


const rootReducer = combineReducers({
  charitiesReducer,
  favoritesReducer
});

export default rootReducer;
