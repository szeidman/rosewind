import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Charities from './components/Charities';
import Favorites from './components/Favorites';
import Home from './components/Home';
import './App.css';

const Header = () =>
  <Router>
    <div>
      <NavLink style={{ marginRight: '10px' }} to="/">Home</NavLink>
      <NavLink style={{ marginRight: '10px' }} to="/charities">Charities</NavLink>
      <NavLink style={{ marginRight: '10px' }} to="/favorites">Favorites</NavLink>
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
        <Header />
      </div>
    );
  }
}

export default App;
