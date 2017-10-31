import {browserHistory} from 'react-router';

const favoritesReducer = (state = {loading: false, favoriteResults: []}, action) => {
  switch (action.type) {
      case 'LOADING_FAVORITES':
        console.log('LOADING_FAVORITES')
        return {...state, loading: true, favoriteResults: []}
      case 'FETCH_FAVORITES':
        console.log('FETCH_FAVORITES' + state)
        return {...state, loading: false, favoriteResults: action.payload}
      case 'CREATE_FAVORITE':
        browserHistory.push(`/favorites/${action.favorite.ein}`);
        return {...state, favoriteResults: state.favoriteResults.concat(action.favorite)};
      case 'DELETE_FAVORITE':
        browserHistory.push(`/charities/${action.favorite.ein}`);
        const favoriteResults = state.favoriteResults.filter(fave => fave.ein !== action.favorite.ein);
        return {favoriteResults}
      case 'EDIT_FAVORITE':
        const editResults = state.favoriteResults.filter(favorite => favorite.id !== action.favorite.id);
        return {...state, favoriteResults: editResults.concat(action.favorite)};
    default:
      return state;
    }
};

export default favoritesReducer;
