const starReducer = (state, action) => {

  switch(action.type) {
    case 'ADD_STAR':
      return {activated: true}
    case 'DELETE_STAR':
      return {activated: false}
    default:
      return state;
  }
}

export default starReducer;
