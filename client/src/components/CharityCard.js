import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './charitycard.css'

const CharityCard = ({info}) => {
  return (
    <div>
      <Card className="charitycard">
        <CardMedia
          overlay={<CardTitle title={info["charityName"]} subtitle={info['tagLine']} />}
        >
          <img className="cardImage" src={info['cause']['image']}  alt="" />
        </CardMedia>
        <CardText>
          <h3>{info['cause']['causeName']}</h3>
          <div className="address">
          <p>{info['mailingAddress']['streetAddress1']}</p>
          <p>{info['mailingAddress']['streetAddress2']}</p>
          <p>{info['mailingAddress']['city']}, {info['mailingAddress']['stateOrProvince']} {info['mailingAddress']['postalCode']}</p>
          </div>
          <br />
          <p>{info['mission']}</p>
          <h3>
            <a href={info['charityNavigatorURL']}>
              <img src="https://www.charitynavigator.org/_gfx_/promo/CN_88x31.gif" alt="" />
            </a> Score: {info['currentRating']['score']}
          </h3>
        </CardText>
      </Card>
    </div>
  )
}

export default CharityCard;
