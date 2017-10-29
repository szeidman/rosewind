import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CharityList from '../components/CharityList';
import Charity from './Charity';
import * as actions from '../actions/charityActions.js';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';


class Charities extends Component {

  handleOnClick = () => {
    this.props.actions.fetchCharities();
  };

  render() {
    const {match, charityState} = this.props;
    const loading = this.props.loading;

    if (loading) {
      return (<div><CircularProgress size={200} thickness={10} /></div>)
    }

    return (
    <div>
      <Switch>
        <Route path={`${match.url}/:ein`} component={Charity} />
        <Route exact path={`${match.url}`} render={() => (
          <div>
            <h1>Charities</h1>
            <RaisedButton onClick={this.handleOnClick} primary={true}>
              Load charities
            </RaisedButton>
            <CharityList charityState={charityState} />
          </div>
        )} />
      </Switch>
    </div>
  )};

}

const mapStateToProps = (state) => {
  return {
    charityState: state.charitiesReducer.charityResults,
    loading: state.charitiesReducer.loading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Charities);
