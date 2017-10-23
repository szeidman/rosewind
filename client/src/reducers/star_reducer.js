const initialState = {
  activated: false
}

const starReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'TOGGLE_STAR':
      return {activated: !state.activated};
    default:
      return state;
  }
}

export default starReducer;
