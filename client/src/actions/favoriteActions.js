import { resetFavoriteForm } from './favoriteFormActions';

export function fetchFavorites() {

  return (dispatch) => {
    dispatch({ type: 'LOADING_FAVORITES' });
    return fetch(`/api/v1/charities`, {
      accept: 'application/json',
    })
      .then(handleErrors)
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCH_FAVORITES', payload: json }))
      .catch(error => dispatch(displayError()));
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
    fetch(`/api/v1/charities`, request)
      .then(handleErrors)
      .then(response => response.json())
      .then(favorite => {
        createHistory.push(`/favorites/${favorite.ein}`);// eslint-disable-line
        dispatch(addFavorite(favorite))
        dispatch(resetFavoriteForm())
      })
      .catch(error => dispatch(displayError()));
  };
}

export const updateFavorite = (favorite, favoriteID) => {
  const updateURI = `/api/v1/charities/${favoriteID}`;
  return dispatch => {
    const request = {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ charity: favorite })
    };
    fetch(updateURI, request)
      .then(handleErrors)
      .then(response => response.json())
      .then(favorite => {
        dispatch(editFavorite(favorite))
        dispatch(resetFavoriteForm())
      })
      .catch(error => dispatch(displayError()));
  };
}

export const deleteFavorite = (favorite, deleteHistory) => {
  return dispatch => {
    fetch(`/api/v1/charities/${favorite.id}`, {
      method: 'delete'
    }).then(handleErrors)
    .then(response => {
      deleteHistory.push(`/charities/${favorite.ein}`);
      dispatch(removeFavorite(favorite))
    })
    .catch(error => dispatch(displayError()));
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
    return fetch(`/api/v1/charities/${favorite.id}`)
      .then(handleErrors)
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCH_FAVORITE', payload: json }))
      .catch(error => dispatch(displayError()));
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

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const displayError = () => {
  return {
    type: 'HANDLE_ERROR'
  }
}

export const resetError = () => {
  return {
    type: 'RESET_ERROR'
  }
}
