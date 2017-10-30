import React from 'react';
import { connect } from 'react-redux';
import CharityDetail from './CharityDetail';

const Charity = ({ charity }) =>
  <div>
    <CharityDetail charityEIN={charity.ein} charity={charity} />
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
