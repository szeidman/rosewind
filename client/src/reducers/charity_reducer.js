const initialState = {
  loading: false,
  charityInfo: {
    mailingAddress: [],
    cause: [],
    currentRating: []
  }
};

const charityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_CHARITY':
      console.log('LOADING_CHARITY')
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_CHARITY':
      console.log('FETCH_CHARITY' + action.payload )
      debugger;
      return {loading: false, charityInfo: action.payload}
      debugger;
    default:
      return state;
    }
};

export default charityReducer;
