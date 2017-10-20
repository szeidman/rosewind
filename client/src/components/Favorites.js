import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CharityList from '../components/CharityList';
import Charity from './Charity';
import * as actions from '../actions/charityActions.js';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';


class Charities extends Component {

  componentDidMount() {
    this.props.actions.fetchFavorites();
  };

  render() {
    const {match, charityState} = this.props;
    return (
    <div>
      <h1>FAVORITES</h1>
      <CharityList charityState={charityState} />
      <Switch>
        <Route path={`${match.url}/:ein`} component={Charity} />
      </Switch>
    </div>
  )};

}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    charityState: state.charitiesReducer.charityResults,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Charities);
