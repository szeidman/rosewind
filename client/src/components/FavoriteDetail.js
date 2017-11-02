import React from 'react';

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
      <p>{favorite.notes || "(Click button to add notes)"}</p>
    </div>
    )
  } else {
    return (
      <div className="favoriteInfo"><p>This charity is not currently in your favorites.</p></div>
    );
  }

}

export default FavoriteDetail;
