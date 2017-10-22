import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Star from './Star';

const Charity = ({ charity }) =>
  <div>
    <h1>{charity.charityName}</h1>
    <h2>{charity.ein}</h2>
    <Star />
  </div>;

const mapStateToProps = (state, ownProps) => {
    const charity = state.charitiesReducer.charityResults.find(charity => charity.ein == ownProps.match.params.ein);
    if (charity) {
      return { charity }
    } else {
      return { charity: {} }
    }
}


export default connect(mapStateToProps)(Charity);
