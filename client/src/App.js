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
      <NavLink to="/">Home</NavLink>
      <NavLink to="/charities">Charities</NavLink>
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
        <Button ripple>
          buttontest
        </Button>
      </div>
    );
  }
}

export default App;
