const initialState = {
  loading: false,
  charityInfo: {
    mailingAddress: [],
    cause: [],
    currentRating: {
      ratingImage: []
    }
  }
};

const charityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_CHARITY':
      console.log('LOADING_CHARITY')
      return {
        loading: true,
        charityInfo: {
          mailingAddress: [],
          cause: [],
          currentRating: {
            ratingImage: []
          }
        }
      }
    case 'FETCH_CHARITY':
      console.log('FETCH_CHARITY' + action.payload )
      return {loading: false, charityInfo: action.payload}
    default:
      return state;
    }
};

export default charityReducer;
