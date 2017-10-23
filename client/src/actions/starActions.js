export function toggleStar() {

  return (dispatch) => {
    dispatch({ type: 'TOGGLE_STAR' })
  };

}
