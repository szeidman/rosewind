import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';


const FavoriteDetail = ({favorite}) => {

  if (!!favorite.ein) {
    return (
    <div className="favoriteInfo">
      <p>{favorite.charityName}</p>
      <p> Added to favorites: </p>
      {favorite.created_at}
      <p> Last Edited: </p>
      <p>{favorite.updated_at}</p>
      <p>Your notes:</p>
      <p>{favorite.notes}</p>
    </div>
    )
  } else {
    return (
      <div className="favoriteInfo"><p>This charity is not currently in your favorites.</p></div>
    );
  }

}

export default FavoriteDetail;
