import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CharityList = ({charityState}) => {

  const CharityRender = charityState.map(charity =>
    <Link key={charity.ein} to={`/charities/${charity.ein}`}>
      <Card>
        <CardHeader
          title={charity.charityName}
          subtitle={charity.ein}
        />
      </Card>
    </Link>
    );
  return (
    <div>
      {CharityRender}
    </div>
  );

};

export default CharityList;
