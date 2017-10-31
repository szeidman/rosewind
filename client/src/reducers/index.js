import { combineReducers } from 'redux';
import charitiesReducer from './charities_reducer';
import charityReducer from './charity_reducer';
import favoritesReducer from './favorites_reducer';
import favoriteReducer from './favorite_reducer';
import favoriteFormReducer from './favorite_form_reducer';


const rootReducer = combineReducers({
  charitiesReducer,
  charityReducer,
  favoritesReducer,
  favoriteReducer,
  favoriteFormReducer
});

export default rootReducer;
