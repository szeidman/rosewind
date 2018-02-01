import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardHeader} from 'material-ui/Card';
import './list.css';

const CharityList = ({charityState}) => {

  const SortedCharities = charityState.sort((a,b) => a.charityName.localeCompare(b.charityName));

  const CharityRender = SortedCharities.map(charity =>
    <Link key={charity.ein} to={`/charities/${charity.ein}`} >
      <Card className="listrender">
        <CardHeader
          title={charity.charityName}
          subtitle={charity.tagLine}
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
