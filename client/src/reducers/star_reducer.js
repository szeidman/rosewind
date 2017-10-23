const initialState = {
  activated: false
}

const starReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.starData;

    case 'RESET_STAR_STATE':
      return initialState;

    default:
      return state;
  }
}

export default starReducer;
