const charityReducer = (state = {loading: false, charityInfo: []}, action) => {
  switch (action.type) {
    case 'LOADING_CHARITY':
      console.log('LOADING_CHARITY')
      return {loading: true, charityInfo: []}
    case 'FETCH_CHARITY':
      console.log('FETCH_CHARITY' + state )
      return {loading: false, charityInfo: action.payload}
    default:
      return state;
    }
};

export default charityReducer;
