const initialState = {
  charityName: '',
  ein: '',
  notes: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_FAVORITE_DATA':
      return action.favoriteFormData;
    case 'RESET_FAVORITE_FORM':
      return initialState;
    default:
      return state;
  }
}
