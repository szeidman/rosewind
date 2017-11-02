const favoritesReducer = (state = {loading: false, favoriteResults: [], redirect: false, hasError: false}, action) => {
  switch (action.type) {
      case 'LOADING_FAVORITES':
        console.log('LOADING_FAVORITES')
        return {...state, loading: true, hasError: false, favoriteResults: []}
      case 'FETCH_FAVORITES':
        console.log('FETCH_FAVORITES' + state)
        return {...state, loading: false, favoriteResults: action.payload}
      case 'CREATE_FAVORITE':
        return {...state, favoriteResults: state.favoriteResults.concat(action.favorite), redirect: true };
      case 'DELETE_FAVORITE':
        const favoriteResults = state.favoriteResults.filter(fave => fave.ein !== action.favorite.ein);
        return {...state, favoriteResults}
      case 'EDIT_FAVORITE':
        const editResults = state.favoriteResults.filter(favorite => favorite.id !== action.favorite.id);
        return {...state, favoriteResults: editResults.concat(action.favorite)};
      case 'HANDLE_ERROR':
        return {...state, hasError: true, loading: false}
      case 'RESET_ERROR':
        return {...state, hasError: false}
    default:
      return state;
    }
};

export default favoritesReducer;
