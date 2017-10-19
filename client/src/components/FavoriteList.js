import React from 'react';

const FavoriteList = ({favoriteState}) => {
  const favoriteRender = favoriteState.map(favorite => <p>{favorite.ein}</p>);
  return (
    <div>{favoriteRender}</div>
  );

};

export default FavoriteList;
