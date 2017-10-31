import React from 'react';

const FavoriteDetail = ({favorite}) => {
  return (
  <div className="favoriteInfo">
    <p>{favorite.ein}</p>
    <p>{favorite.charityName} was added to your favorites on {favorite.created_at}.</p>
    <p>{favorite.notes}</p>
  </div>
  )
}

export default FavoriteDetail;
