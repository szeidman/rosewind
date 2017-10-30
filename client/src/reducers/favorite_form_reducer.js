const initialState = {
  charityName: '',
  ein: '',
  notes: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_FAVORITE_DATA':
      return console.log('update!')
    case 'RESET_FAVORITE_FORM':
      return initialSate;
    default:
      return state;
  }
}
