import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';
import Charities from './Charities';
import Favorites from './Favorites';
import Home from './Home';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionHome from 'material-ui/svg-icons/action/home';
import SocialPublic from 'material-ui/svg-icons/social/public';
import {cyan100} from 'material-ui/styles/colors';

const Header = () =>
  <Router>
    <div>
      <Tabs inkBarStyle={{backgroundColor: cyan100}}>
       <Tab
        label="Home"
        containerElement={<Link to="/"/>}
        icon={<ActionHome />}
        />
       <Tab
        label="Charities"
        containerElement={<Link to="/charities"/>}
        icon={<SocialPublic />}
       />
       <Tab
          label="Favorites"
          containerElement={<Link to="/favorites"/>}
          icon={<ActionFavorite />}
       />
      </Tabs>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/charities" component={Charities} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </div>
  </Router>
;

export default Header;
