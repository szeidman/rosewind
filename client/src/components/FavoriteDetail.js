import React from 'react';
import {CardHeader} from 'material-ui/Card';

const FavoriteDetail = ({favorite}) => {

  if (!!favorite.ein) {
    return (
    <div className="favoriteInfo">
      <CardHeader
        title={favorite.charityName}
        subtitle="is in your favorites."
      />
      <p>Employer Identification Number (EIN): {favorite.ein}</p>
      <p className="favoriteLabel"> Added:</p>
      {favorite.created_at}
      <p className="favoriteLabel"> Last Edited: </p>
      {favorite.updated_at}
      <p className="favoriteLabel">Your Notes:</p>
      <p className="favoriteNote">{favorite.notes || "(Click button to add notes)"}</p>
    </div>
    )
  } else {
    return (
      <div className="favoriteInfo"><p>This charity is not currently in your favorites.</p></div>
    );
  }

}

export default FavoriteDetail;
