const favoritesReducer = (state = {loading: false, payloadfaves: []}, action) => {
  switch (action.type) {
    case 'LOADING_FAVORITES':
      console.log('LOADING_favorites')
      return {loading: true, payloadfaves: []}
    case 'FETCH_FAVORITES':
      console.log('FETCH_FAVORITES' + action.payload)
      return {loading: false, payloadfaves: action.payload}
    default:
      return state;
    }
};

export default favoritesReducer;
