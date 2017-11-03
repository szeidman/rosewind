import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CharityList from '../components/CharityList';
import Charity from './Charity';
import * as actions from '../actions/charityActions.js';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import SelectField from 'material-ui/SelectField';
import {cyan900} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';


const Codes = ["AK", "AL", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", "DC"]

class Charities extends Component {

  componentDidMount() {
    this.props.actions.resetError();
  };

  handleOnClick = () => {
    const stateCode = this.props.stateCode;
    this.props.actions.resetError();
    this.props.actions.fetchCharities(stateCode);
  };

  handleOnChange = event => {
    this.props.actions.setStateCode(event.target.innerText);
  }

  render() {
    const {match, charityState} = this.props;

    const loadingWheel =
      <h1><CircularProgress size={200} thickness={10} /></h1>

    const errorMessage = <h3>An error occurred loading these charities. Click the button above to try again. If the problem persists, contact your administrator.</h3>

    let errorLoadOrList;

    if (!!this.props.hasError) {
      errorLoadOrList = errorMessage;
    } else if (!!this.props.loading) {
      errorLoadOrList = loadingWheel;
    } else {
      errorLoadOrList = <CharityList charityState={charityState} />
    }

    const oneCode = Codes.map(code => <MenuItem
      key={code}
      primaryText={code}
      value={code}
    />)

    return (
    <div>
      <Switch>
        <Route path={`${match.url}/:ein`} component={Charity} />
        <Route exact path={`${match.url}`} render={() => (
          <div>
            <h1>Charities</h1>
            <h4>Find the top-rated charities and nonprofits on Charity Navigator in each U.S. state and D.C.</h4>
            <SelectField
              value={this.props.stateCode}
              onChange={this.handleOnChange.bind(this)}
              floatingLabelFixed={true}
              floatingLabelText="Select a state:"
              underlineStyle={{display: 'none'}}
              style={{width: 120}}
              labelStyle={{ color: cyan900 }}
            >
              {oneCode}
            </SelectField>
            <br />
            <RaisedButton onClick={this.handleOnClick.bind(this)} primary={true}>
              Load Charities
            </RaisedButton>
            {errorLoadOrList}
          </div>
        )} />
      </Switch>
    </div>
  )};

}

const mapStateToProps = (state) => {
  return {
    charityState: state.charitiesReducer.charityResults,
    loading: state.charitiesReducer.loading,
    hasError: state.charitiesReducer.hasError,
    stateCode: state.charitiesReducer.stateCode
  };
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Charities);
