import { resetFavoriteForm } from './favoriteFormActions';


export function fetchFavorites() {

  return (dispatch) => {
    dispatch({ type: 'LOADING_FAVORITES' });
    return fetch("http://localhost:3001/api/v1/charities")
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCH_FAVORITES', payload: json }));
  };

}

export const createFavorite = (favorite, createHistory) => {
  return dispatch => {
    const request = {
      method: 'post',
      headers: { 'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ charity: favorite })
    };
    fetch("http://localhost:3001/api/v1/charities", request)
      .then(response => response.json())
      .then(favorite => {
        createHistory.push(`/favorites/${favorite.ein}`);// eslint-disable-line
        dispatch(addFavorite(favorite))
        dispatch(resetFavoriteForm())
      })
      .catch(function(error) {console.log(error)})
  };
}

export const updateFavorite = (favorite, favoriteID) => {
  const updateURI = "http://localhost:3001/api/v1/charities/"+favoriteID;
  return dispatch => {
    const request = {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ charity: favorite })
    };
    fetch(updateURI, request)
      .then(response => response.json())
      .then(favorite => {
        dispatch(editFavorite(favorite))
        dispatch(resetFavoriteForm())
      })
      .catch(error => console.log(error))
  };
}

export const deleteFavorite = (favorite, deleteHistory) => {
  return dispatch => {
    fetch(`http://localhost:3001/api/v1/charities/${favorite.id}`, {
      method: 'delete'
    }).then(response => {
      deleteHistory.push(`/charities/${favorite.ein}`);
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

const editFavorite = favorite => {
  return {
    type: 'EDIT_FAVORITE',
    favorite
  }
}

export const removeFavorite = favorite => {
  return {
    type: 'DELETE_FAVORITE',
    favorite
  }
}

export const clearRedirect = () => {
  return { type: 'CLEAR_REDIRECT' }
}

export function fetchFavorite(favorite) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_FAVORITE' });
    return fetch(`http://localhost:3001/api/v1/charities/${favorite.id}`)
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCH_FAVORITE', payload: json }));
  };

}

export const viewEditForm = () => {
  return {
    type: 'VIEW_EDIT_FORM',
  }
}

export const hideEditForm = () => {
  return {
    type: 'HIDE_EDIT_FORM',
  }
}
