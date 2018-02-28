import React from 'react';
import {CardHeader} from 'material-ui/Card';
import moment from 'moment';

const FavoriteDetail = ({favorite}) => {

  let CreateTime, EditTime;

  if (!!favorite.created_at) {
    CreateTime = moment(favorite.created_at).format('MMMM Do YYYY, h:mm:ss a');
    EditTime = moment(favorite.updated_at).format('MMMM Do YYYY, h:mm:ss a');
  }

  if (!!favorite.ein) {
    return (
    <div className="favoriteInfo">
      <CardHeader
        title={favorite.charityName}
        subtitle="is in your favorites."
      />
      <p>Employer Identification Number (EIN): {favorite.ein}</p>
      <p className="favoriteLabel"> Added:</p>
      {CreateTime}
      <p className="favoriteLabel"> Last Edited: </p>
      {EditTime}
      <p className="favoriteLabel">Your Notes:</p>
      <p className="favoriteNote">{favorite.notes || "[None]"}</p>
    </div>
    )
  } else {
    return (
      <div className="favoriteInfo"><p>This charity is not currently in your favorites.</p></div>
    );
  }

}

export default FavoriteDetail;
