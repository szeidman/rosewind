import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';


const Charity = ({ charity }) =>
  <div>
    <h1>{charity.ein}</h1>
    <RaisedButton onClick={this.handleOnClick} primary={true}>
      Add to favorites
    </RaisedButton>
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
