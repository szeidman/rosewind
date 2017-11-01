const charityNavId = process.env.REACT_APP_CHARITYNAV_ID;
const charityNavKey = process.env.REACT_APP_CHARITYNAV_KEY;

 export function fetchCharities(codeState) {

   return (dispatch) => {
     dispatch({ type: 'LOADING_CHARITIES' });
     return fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=${charityNavId}&app_key=${charityNavKey}&minRating=4&pageSize=1000&state=`+codeState)
       .then(response => response.json())
       .then(json => dispatch({ type: 'FETCH_CHARITIES', payload: json }));
   };
 }

 export function fetchCharity(ein) {

   return (dispatch) => {
     dispatch({ type: 'LOADING_CHARITY' });
     return fetch("https://api.data.charitynavigator.org/v2/Organizations/"+ein+`?app_id=${charityNavId}&app_key=${charityNavKey}`)
       .then(response => response.json())
       .then(json => dispatch({ type: 'FETCH_CHARITY', payload: json }));
   };
 }

 export const toggleForm = () => {
  return (dispatch) => {
    dispatch({type: 'TOGGLE_FORM'});
  }
}
