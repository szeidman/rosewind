import fetch from 'isomorphic-fetch';

const charityNavId = process.env.REACT_APP_CHARITYNAV_ID;
const charityNavKey = process.env.REACT_APP_CHARITYNAV_KEY;
const ein = '42103907'

 export function fetchCharities() {

   return (dispatch) => {
     dispatch({ type: 'LOADING_CHARITIES' });
     return fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=${charityNavId}&app_key=${charityNavKey}&minRating=4&pageSize=1000&categoryID=8`)
       .then(response => response.json())
       .then(json => dispatch({ type: 'FETCH_CHARITIES', payload: json }));
   };
 }

 export function fetchFavorites() {

   return (dispatch) => {
     dispatch({ type: 'LOADING_CHARITIES' });
     return fetch('API/charities')
       .then(response => response.json())
       .then(json => dispatch({ type: 'FETCH_CHARITIES', payload: json }));
   };

 }

 export function fetchCharity() {

   return (dispatch) => {
     dispatch({ type: 'LOADING_CHARITIES' });
     return fetch(`https://api.data.charitynavigator.org/v2/Organizations/${ein}?app_id=${charityNavId}&app_key=${charityNavKey}`)
       .then(response => response.json())
       .then(json => dispatch({ type: 'FETCH_CHARITIES', payload: json }));
   };
 }
