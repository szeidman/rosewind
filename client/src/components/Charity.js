import React from 'react';
import { connect } from 'react-redux';


const Charity = ({ charity }) =>
  <div>
    <h1>{charity.ein}</h1>
  </div>;

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const charity = state.charitiesReducer.charityResults.find(charity => charity.ein == ownProps.match.params.ein);
    if (charity) {
      return { charity }
    } else {
      return { charity: {} }
    }
}


export default connect(mapStateToProps)(Charity);
