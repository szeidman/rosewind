import React from 'react';
import { Link } from 'react-router-dom';

const CharityList = ({charityState}) => {
  const charityRender = charityState.map(charity => <Link key={charity.ein} to={`/charities/${charity.ein}`}>{charity.charityName}</Link>);
  return (
    <div>{charityRender}</div>
  );

};

export default CharityList;
