import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardHeader} from 'material-ui/Card';

const CharityList = ({charityState}) => {

  const CharityRender = charityState.map(charity =>
    <Link key={charity.ein} to={`/charities/${charity.ein}`} >
      <Card className="charityrender">
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
