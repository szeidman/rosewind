import { combineReducers } from 'redux';
import charitiesReducer from './charities_reducer';
import charityReducer from './charity_reducer';
import favoritesReducer from './favorites_reducer';
import favoriteFormReducer from './favorite_form_reducer';


const rootReducer = combineReducers({
  charitiesReducer,
  charityReducer,
  favoritesReducer,
  favoriteFormReducer
});

export default rootReducer;
