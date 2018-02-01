const charitiesReducer = (state = {loading: false, charityResults: [], hasError: false, stateCode: 'NY'}, action) => {
  switch (action.type) {
    case 'LOADING_CHARITIES':
      console.log('LOADING_CHARITIES')
      return {...state, loading: true, charityResults: []}
    case 'FETCH_CHARITIES':
      debugger;
      console.log('FETCH_CHARITIES' + state)
      return {...state, loading: false, charityResults: action.payload}
    case 'HANDLE_ERROR':
      return {...state, hasError: true, loading: false}
    case 'RESET_ERROR':
      return {...state, hasError: false}
    case 'SET_STATE_CODE':
      return {...state, stateCode: action.stateCode}
    default:
      return state;
    }
};

export default charitiesReducer;
