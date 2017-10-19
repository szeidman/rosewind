import React from 'react';

const CharityList = ({charityState}) => {
  const charityRender = charityState.map(charity => <p>{charity.name} {charity.ein}</p>);
  return (
    <div>{charityRender}</div>
  );

};

export default CharityList;