import fetch from 'isomorphic-fetch';

 export function fetchCharities() {
   return (dispatch) => {
     dispatch({ type: 'LOADING_CHARITIES' });
     return fetch('/charities')
       .then(response => response.json())
       .then(json => dispatch({ type: 'FETCH_CHARITIES', payload: json }));
   };
 }
