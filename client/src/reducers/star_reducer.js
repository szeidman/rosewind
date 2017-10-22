const initialState = {
  ein: '',
  length: 0
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.starData;

    case 'RESET_STAR_STATE':
      return initialState;

    default:
      return state;
  }
}
