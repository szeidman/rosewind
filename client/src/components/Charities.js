import React, { Component } from 'react';
import { connect } from 'react-redux';
import CharityList from '../components/CharityList';
import { fetchCharities } from '../actions/charityActions.js';
import { bindActionCreators } from 'redux';

class Charities extends Component {

  componentDidMount() {
    this.props.fetchCharities();
  };

  render() {
    return (
    <div>
      <h1>CHARITIES</h1>
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
