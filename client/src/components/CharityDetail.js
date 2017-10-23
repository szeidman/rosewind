import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as actions from '../actions/charityActions.js';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';


class CharityDetail extends Component {

  componentWillMount() {
    const charityEIN = this.props.charityEIN;
    this.props.actions.fetchCharity(charityEIN);
  };

  render() {
    return (
    <div>
      <h1>{this.props.infoState["charityName"]}</h1>
      <h2>{this.props.infoState['tagline']}</h2>
      <h2>{this.props.infoState['cause']['causeName']}</h2>
      <h2>{this.props.infoState['currentRating']['rating']}</h2>
      <img src={this.props.infoState['currentRating']['ratingImage']['small']} alt="stars" />
      <h2>{this.props.infoState['currentRating']['score']}</h2>
      <h2>{this.props.infoState['mailingAddress']['streetAddress1']}</h2>
      <h2>{this.props.infoState['mailingAddress']['streetAddress2']}</h2>
      <h2>{this.props.infoState['mailingAddress']['city']}</h2>
      <h2>{this.props.infoState['mailingAddress']['stateOrProvince']}</h2>
      <h2>{this.props.infoState['mailingAddress']['postalCode']}</h2>
      <h2>{this.props.infoState['mission']}</h2>
      <h2>{this.props.infoState['ein']}</h2>

    </div>
  )};

}

const mapStateToProps = (state) => {
  return {
    infoState: state.charityReducer.charityInfo,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(CharityDetail);
