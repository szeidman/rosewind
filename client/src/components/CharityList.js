import React from 'react';

const CharityList = ({charityState}) => {
  const charityRender = charityState.map(charity => <p>{charity.charityName}</p>);
  return (
    <div>{charityRender}</div>
  );

};

export default CharityList;
