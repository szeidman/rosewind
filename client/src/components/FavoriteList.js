import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardHeader} from 'material-ui/Card';

const FavoriteList = ({favoriteState}) => {

  const FavoriteRender = favoriteState.map(favorite =>
    <Link key={favorite.id} to={`/favorites/${favorite.ein}`}>
      <Card>
        <CardHeader
          title={favorite.charityName}
          subtitle={favorite.ein}
        />
      </Card>
    </Link>
    );
  return (
    <div>
      {FavoriteRender}
    </div>
  );

};

export default FavoriteList;
