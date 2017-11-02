import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardHeader} from 'material-ui/Card';
import './list.css';


const FavoriteList = ({favoriteState}) => {

  const FavoriteRender = favoriteState.map(favorite =>
    <Link key={favorite.id} to={`/favorites/${favorite.ein}`}>
      <Card className="listrender">
        <CardHeader className="favorite"
          title={favorite.charityName}
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
