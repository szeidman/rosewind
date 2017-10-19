import fetch from 'isomorphic-fetch';

 export function fetchFavorites() {
   return (dispatch) => {
     dispatch({ type: 'LOADING_FAVORITES' });
     return fetch('charities')
       .then(response => response.json())
       .then(json => dispatch({ type: 'FETCH_FAVORITES', payload: json }));
   };
 }
