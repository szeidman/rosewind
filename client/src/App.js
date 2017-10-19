import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Button from 'react-toolbox/lib/button/Button';
import Link from 'react-toolbox/lib/link/Link';
import { connect } from 'react-redux';
import Charities from './components/Charities';
import Home from './components/Home';
import { fetchCharities } from './actions/charityActions.js';
import { bindActionCreators } from 'redux';
import './App.css';

const Top = () =>
  <Router>
    <div>
      <Navigation type='vertical'>
        <NavLink style={{ marginRight: '10px' }} to="/">Home</NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/charities">Charities</NavLink>
      </Navigation>
      <Switch>
        <Route exact path="/" compenent={Home} />
        <Route path="/charities" component={Charities} />
      </Switch>
    </div>
  </Router>
;

class App extends Component {

  render() {
    return (
      <div className="App">
        <Top />
        <Button raised ripple primary>
          buttontest
        </Button>
      </div>
    );
  }
}

export default App;
