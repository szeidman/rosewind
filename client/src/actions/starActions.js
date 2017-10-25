export function toggleStar(ein) {
  return (dispatch, getState) => {
    if (getState().starReducer.activated) {
      dispatch({ type: 'DELETE_STAR' })
    } else {
      dispatch({ type: 'ADD_STAR' })
    };

  };

}
