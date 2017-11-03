import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
import Charities from './Charities';
import Favorites from './Favorites';
import Home from './Home';
import {Tabs, Tab} from 'material-ui/Tabs';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionHome from 'material-ui/svg-icons/action/home';
import SocialPublic from 'material-ui/svg-icons/social/public';
import {cyan100} from 'material-ui/styles/colors';

class Header extends Component {

  componentDidMount(){
  }

  componentWillReceiveProps(){
  }

  getTabValue() {
    const Pathname = this.props.location.pathname;
    if (Pathname.includes("/charities")) {
      return "charities"
    } else if (Pathname.includes("/favorites")){
      return "favorites"
    } else {
      return "home"
    }
  }

  render() {
    const TabValue = this.getTabValue()

    return (
      <div>
        <Tabs inkBarStyle={{backgroundColor: cyan100}} value={TabValue}>
         <Tab
            label="Home"
            containerElement={<NavLink to="/"/>}
            icon={<ActionHome />}
            value="home"
          />
         <Tab
            label="Charities"
            containerElement={<NavLink to="/charities"/>}
            icon={<SocialPublic />}
            value="charities"
         />
         <Tab
            label="Favorites"
            containerElement={<NavLink to="/favorites"/>}
            icon={<ActionFavorite />}
            value="favorites"
         />
        </Tabs>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/charities" component={Charities} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {}
}

export default withRouter(connect(mapStateToProps)(Header));
