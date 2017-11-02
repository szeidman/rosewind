import React from 'react';
import { connect } from 'react-redux';
import CharityDetail from './CharityDetail';
import {withRouter} from "react-router-dom";


const Charity = ({ charity }) =>
  <div>
    <CharityDetail charityEIN={charity.ein} />
  </div>;

const mapStateToProps = (state, ownProps) => {
    const charity = state.charitiesReducer.charityResults.find(charity => charity.ein == ownProps.match.params.ein); // eslint-disable-line eqeqeq
    if (charity) {
      return { charity }
    } else {
      return { charity: {} }
    }
}


export default withRouter(connect(mapStateToProps)(Charity));
