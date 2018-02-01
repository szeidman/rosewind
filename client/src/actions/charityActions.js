 export function fetchCharities(stateCode) {
   return dispatch => {
     dispatch({ type: 'LOADING_CHARITIES' });
     const request = {
       method: 'post',
       headers: { 'Content-Type' : 'application/json'
       },
       body: JSON.stringify({charity_nav: {state: stateCode} })
      };
     fetch(`/api/v1/charity_nav/search_state`, request)
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
     return dispatch => {
       dispatch({ type: 'LOADING_CHARITY' });
       const request = {
         method: 'post',
         headers: { 'Content-Type' : 'application/json'
         },
         body: JSON.stringify({charity_nav: {ein: ein} })
       };
      fetch(`/api/v1/charity_nav/search_ein`, request)
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
