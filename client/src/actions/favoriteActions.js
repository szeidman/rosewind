import fetch from 'isomorphic-fetch';

export function fetchFavorites() {

  return (dispatch) => {
    dispatch({ type: 'LOADING_FAVORITES' });
    return fetch('api/v1/charities')
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCH_FAVORITES', payload: json }));
  };

}

export const createFavorite = favorite => {
  return dispatch => {
    return fetch('api/v1/charities', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ favorite: favorite })
    })
      .then(response => response.json())
      .then(favorite => {
        dispatch(addFavorite(favorite))
      })
      .catch(error => console.log(error))
  };
}

const addFavorite = favorite => {
  return {
    type: 'CREATE_FAVORITE',
    favorite
  }
}

export const deleteFavorite = favorite => {
  return {
    type: 'DELETE_FAVORITE',
    favorite
  }
}
