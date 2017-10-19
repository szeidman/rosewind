const charitiesReducer = (state = {loading: false, payloadnames: []}, action) => {
  switch (action.type) {
    case 'LOADING_CHARITIES':
      console.log('LOADING_CHARITIES')
      return {loading: true, payloadnames: []}
    case 'FETCH_CHARITIES':
      console.log('FETCH_CHARITIES')
      return {loading: false, payloadnames: action.payload}
    default:
      return state;
    }
};

export default charitiesReducer;
