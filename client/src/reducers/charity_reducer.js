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
  viewForm: false
};

const charityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_CHARITY':
      console.log('LOADING_CHARITY')
      return {
        ...state,
        loading: true,
        charityInfo: {
          mailingAddress: [],
          category: [],
          cause: [],
          currentRating: {
            ratingImage: []
          }
        }
      }
    case 'FETCH_CHARITY':
      console.log('FETCH_CHARITY' + action.payload )
      return {...state, loading: false, charityInfo: action.payload}
    case 'TOGGLE_FORM':
      return {
        ...state,
        viewForm: true
      }
    default:
      return state;
    }
};

export default charityReducer;
