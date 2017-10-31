const initialState = {
  formView: false
}

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_EDIT_FORM':
      return {...state, formView: true}
    case 'HIDE_EDIT_FORM':
      return {...state, formView: false}
    default:
      return state;
    }
};

export default favoriteReducer;
