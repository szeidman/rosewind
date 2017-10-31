import React from 'react';

const FavoriteDetail = ({favorite}) => {
  if (!!favorite.ein) {
    return (
    <div className="favoriteInfo">
      <p>{favorite.ein}</p>
      <p>{favorite.charityName} was added to your favorites on {favorite.created_at}.</p>
      <p>{favorite.notes}</p>
    </div>
    )
  } else {
    return null;
  }

}

export default FavoriteDetail;
