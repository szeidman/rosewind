import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Charities from './Charities';
import Favorites from './Favorites';
import Home from './Home';


class TopBar extends Component {

  render() {
    return (
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
    );
  }
}

export default TopBar;
