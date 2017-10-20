const charitiesReducer = (state = {loading: false, charityResults: [], favoriteResults: []}, action) => {
  switch (action.type) {
    case 'LOADING_CHARITIES':
      console.log('LOADING_CHARITIES')
      return {loading: true, charityResults: []}
    case 'FETCH_CHARITIES':
      console.log('FETCH_CHARITIES' + state)
      return {loading: false, charityResults: action.payload}
    default:
      return state;
    }
};

export default charitiesReducer;
