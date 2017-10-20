import React from 'react';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';

const CharityList = ({charityState}) => {

  const charityRender = charityState.map(charity =>
      <ListItem>
        <Link key={charity.ein} to={`/charities/${charity.ein}`}>{charity.charityName}</Link>
      </ListItem>
    );
  return (
    <div>
      <List>
        {charityRender}
      </List>
    </div>
  );

};

export default CharityList;
