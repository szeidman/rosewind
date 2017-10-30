const initialState = {
  loading: false,
  favoriteInfo: {
    charityName: '',
    ein: '',
    notes: ''
    }
  }
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_FAVORITE':
      console.log('LOADING_FAVORITE')
      return {
        loading: true,
        favoriteInfo: {
          charityName: '',
          ein: '',
          notes: ''
          }
        }
      }
    case 'FETCH_FAVORITE':
      console.log('FETCH_FAVORITE' + action.payload )
      return {loading: false, favoriteInfo: action.payload}
    default:
      return state;
    }
};

export default favoriteReducer;
