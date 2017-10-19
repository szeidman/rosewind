import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Button from 'react-toolbox/lib/button/Button';
import Charities from './components/Charities';
import Favorites from './components/Favorites';
import Home from './components/Home';
import './App.css';

const Top = () =>
  <Router>
    <div>
      <Navigation type='vertical'>
        <NavLink style={{ marginRight: '10px' }} to="/">Home</NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/charities">Charities</NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/favorites">Favorites</NavLink>
      </Navigation>
      <Switch>
        <Route exact path="/" compenent={Home} />
        <Route path="/charities" component={Charities} />
        <Route path="/favorites" component={Favorites} />
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
