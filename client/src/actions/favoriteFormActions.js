export const updateFavoriteFormData = favoriteFormData => {
  return {
    type: 'UPDATE_FAVORITE_DATA',
    favoriteFormData
  }
}

export const resetFavoriteForm = () => {
  return {
    type: 'RESET_FAVORITE_FORM'
  }
}
