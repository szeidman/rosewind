import React from 'react';
import {CardHeader} from 'material-ui/Card';

const FavoriteDetail = ({favorite}) => {

  let CreateTime, EditTime;

  function timeParse(datetime) {
    let date = datetime.split("T")[0];
    let time = datetime.split("T")[1];
    let month = date.split("-")[1];
    let day = date.split("-")[2];
    let year = date.split("-")[0];
    let hour = time.split(":")[0];
    let minute = time.split(":")[1];
    let second = time.split(":")[2].split(".")[0];
    return `${month}/${day}/${year} at ${hour}:${minute}:${second}`;
  }

  if (!!favorite.created_at) {
    CreateTime = timeParse(favorite.created_at);
    EditTime = timeParse(favorite.updated_at)
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
