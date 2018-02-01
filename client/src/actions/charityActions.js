const charityNavId = process.env.REACT_APP_CHARITYNAV_ID;
const charityNavKey = process.env.REACT_APP_CHARITYNAV_KEY;

 export function fetchCharities(stateCode) {
   return dispatch => {
     const request = {
       method: 'post',
       headers: { 'Content-Type' : 'application/json'
       },
     };
     fetch(`/api/v1/charity_nav/search`, request)
       .then(handleErrors)
       .then(response => response.json())
       .then(json => dispatch({ type: 'FETCH_CHARITIES', payload: json }))
       .catch(error => dispatch(displayError()));
   };
 }

 export function fetchCharity(ein) {
   let numbers = /^\d+$/.test(ein);
   if (!(numbers && ein.length === 9)) {
     return (dispatch) => {
       dispatch(displayError())
     }
   } else {
     return (dispatch) => {
       dispatch({ type: 'LOADING_CHARITY' });
       return fetch("https://api.data.charitynavigator.org/v2/Organizations/"+ein+`?app_id=${charityNavId}&app_key=${charityNavKey}`)
         .then(handleErrors)
         .then(response => response.json())
         .then(json => dispatch({ type: 'FETCH_CHARITY', payload: json }))
         .catch(error => dispatch(displayError()));
     };
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

 export const setStateCode = (stateCode) => {
   return {
     type: 'SET_STATE_CODE',
     stateCode
   }
 }
