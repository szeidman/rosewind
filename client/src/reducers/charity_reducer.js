const initialState = {
  loading: false,
  charityInfo: {
    mailingAddress: [],
    category: [],
    cause: [],
    currentRating: {
      ratingImage: []
    }
  },
  hasError: false
};

const charityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_CHARITY':
      console.log('LOADING_CHARITY')
      return {...state, loading: true}
    case 'FETCH_CHARITY':
      console.log('FETCH_CHARITY' + action.payload )
      return {...state, loading: false, charityInfo: action.payload}
    case 'HANDLE_ERROR':
      return {...state, hasError: true, loading: false}
    case 'RESET_ERROR':
      return {...state, hasError: false}
    default:
      return state;
    }
};

export default charityReducer;
