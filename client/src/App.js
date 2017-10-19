import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'react-toolbox/lib/button/Button';
import { connect } from 'react-redux';
import CharityList from './CharityList';
import { fetchCharities } from './actions/charityActions.js';
import { bindActionCreators } from 'redux';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchCharities();
  };

  render() {
    return (
      <div className="App">
        <Button raised primary ripple>
          Bonjour
        </Button>
        <CharityList charityState={this.props.charityState} />
      </div>
    );
  }
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
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
