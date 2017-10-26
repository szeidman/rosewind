export function fetchFavorites() {

  return (dispatch) => {
    dispatch({ type: 'LOADING_FAVORITES' });
    return fetch('api/v1/charities')
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCH_FAVORITES', payload: json }));
  };

}

export const createFavorite = (favorite) => {
  return dispatch => {
    const request = {
      method: 'post',
      headers: { 'Content-Type' : 'application/x-www-form-urlencoded'
      },
      body: favorite
    };
    fetch("http://localhost:3001/api/v1/charities", request)
      .then(response => response.json())
      .then(favorite => {
        dispatch(addFavorite(favorite))
      })
      .catch(error => console.log(error))
  };
}

export const deleteFavorite = (favorite) => {
  return dispatch => {
    fetch(`http://localhost:3001/api/v1/charities/${favorite.id}`, {
      method: 'delete'
    }).then(response => {
      dispatch(removeFavorite(favorite))
    });
  }
}

const addFavorite = favorite => {
  return {
    type: 'CREATE_FAVORITE',
    favorite
  }
}

export const removeFavorite = favorite => {
  return {
    type: 'DELETE_FAVORITE',
    favorite
  }
}
