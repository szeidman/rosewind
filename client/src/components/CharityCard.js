import React from 'react';

const CharityCard = ({info}) => {
  return (
    <div>
      <h1>{info["charityName"]}</h1>
      <h2>{info['tagline']}</h2>
      <h2>{info['cause']['causeName']}</h2>
      <h3>Rating:
      <img src={info['currentRating']['ratingImage']['small']} alt="stars" /></h3>
      <h2>{info['currentRating']['score']}</h2>
      <p>{info['mailingAddress']['streetAddress1']}</p>
      <p>{info['mailingAddress']['streetAddress2']}</p>
      <p>{info['mailingAddress']['city']}, {info['mailingAddress']['stateOrProvince']} {info['mailingAddress']['postalCode']}</p>

      <p>{info['mission']}</p>
    </div>
  )
}

export default CharityCard;
