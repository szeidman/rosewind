import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Charities from './Charities';
import Favorites from './Favorites';
import Home from './Home';



const Header = () =>
  <Router>
    <div>
      <NavLink exact activeStyle={{color: 'red'}} style={{ marginRight: '10px' }} to="/">Home</NavLink>
      <NavLink activeStyle={{color: 'red'}} style={{ marginRight: '10px' }} to="/charities">Charities</NavLink>
      <NavLink activeStyle={{color: 'red'}} style={{ marginRight: '10px' }} to="/favorites">Favorites</NavLink>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/charities" component={Charities} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </div>
  </Router>
;

export default Header;
