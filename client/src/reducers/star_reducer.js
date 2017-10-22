const initialState = {
  activated: false
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

case 'CREATE_FAVORITE':
  return state.concat(action.favorite);
