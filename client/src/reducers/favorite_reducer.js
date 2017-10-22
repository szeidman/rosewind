const favoritesReducer = (state = {loading: false, favoriteResults: []}, action) => {
  switch (action.type) {
      case 'LOADING_FAVORITES':
        console.log('LOADING_FAVORITES')
        return {loading: true, favoriteResults: []}
      case 'FETCH_FAVORITES':
        console.log('FETCH_FAVORITES' + state)
        return {loading: false, favoriteResults: action.payload}
      case 'CREATE_FAVORITE':
        console.log('CREATE_FAVORITES' + state)
        return state.concat(action.payload)
      case 'DELETE_FAVORITE':
        console.log('DELETE_FAVORITE')
    default:
      return state;
    }
};

export default favoritesReducer;
