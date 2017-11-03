import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardHeader} from 'material-ui/Card';
import './list.css';


const FavoriteList = ({favoriteState}) => {
  const SortedFavorites = favoriteState.sort((a,b) => a.charityName.localeCompare(b.charityName));
  
  const FavoriteRender = SortedFavorites.map(favorite =>
    <Link key={favorite.id} to={`/favorites/${favorite.ein}`}>
      <Card className="listrender">
        <CardHeader className="favorite"
          title={favorite.charityName}
          subtitle={favorite.notes}
          subtitleStyle={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: 'nowrap', width: '20rem'}}
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
