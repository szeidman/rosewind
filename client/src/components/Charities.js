import React, { Component } from 'react';
import { connect } from 'react-redux';
import CharityList from '../components/CharityList';
import { fetchCharities } from '../actions/charityActions.js';
import { bindActionCreators } from 'redux';
import Button from 'react-toolbox/lib/button/Button';


class Charities extends Component {

  handleOnClick = () => {
    this.props.fetchCharities();
  };

  render() {
    return (
    <div>
      <h1>CHARITIES</h1>
      <Button onClick={this.handleOnClick} raised ripple primary>
        Search
      </Button>
      <CharityList charityState={this.props.charityState} />
    </div>
  )};

}

const mapStateToProps = (state) => {
  console.log('mapstatetoprops' + state);
  return {
    charityState: state.charitiesIndex.payloadnames,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCharities: fetchCharities
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Charities);
