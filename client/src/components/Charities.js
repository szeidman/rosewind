import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CharityList from '../components/CharityList';
import Charity from './Charity';
import * as actions from '../actions/charityActions.js';
import { bindActionCreators } from 'redux';
import Button from 'react-toolbox/lib/button/Button';


class Charities extends Component {

  handleOnClick = () => {
    this.props.actions.fetchCharities();
  };

  render() {
    const {match, charityState} = this.props;
    return (
    <div>
      <h1>CHARITIES</h1>
      <Button onClick={this.handleOnClick} raised ripple primary>
        Search
      </Button>
      <CharityList charityState={charityState} />
      <Switch>
        <Route path={`${match.url}/:ein`} component={Charity} />
      </Switch>
    </div>
  )};

}

const mapStateToProps = (state) => {
  return {
    charityState: state.charitiesReducer.charityResults,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Charities);
