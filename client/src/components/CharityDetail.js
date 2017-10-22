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
      <h1>SECOND SEARCH{this.props.infoState.charityName}</h1>
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
