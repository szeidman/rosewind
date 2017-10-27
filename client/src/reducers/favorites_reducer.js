const favoritesReducer = (state = {loading: false, favoriteResults: []}, action) => {
  switch (action.type) {
      case 'LOADING_FAVORITES':
        console.log('LOADING_FAVORITES')
        return {...state, loading: true, favoriteResults: []}
      case 'FETCH_FAVORITES':
        console.log('FETCH_FAVORITES' + state)
        return {...state, loading: false, favoriteResults: action.payload}
      case 'CREATE_FAVORITE':
        return {...state, favoriteResults: state.favoriteResults.concat(action.favorite)};
      case 'DELETE_FAVORITE':
        const favoriteResults = state.favoriteResults.filter(fave => fave.ein !== action.favorite.ein);
        return {favoriteResults}
    default:
      return state;
    }
};

export default favoritesReducer;
