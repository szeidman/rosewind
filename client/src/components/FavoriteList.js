import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const FavoriteList = ({favoriteState}) => {

  const FavoriteRender = favoriteState.map(favorite =>
    <Link key={favorite.ein} to={`/favorites/${favorite.ein}`}>
      <Card>
        <CardHeader
          title={favorite.favoriteName}
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
