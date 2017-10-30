import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import FavoriteList from '../components/FavoriteList';
import Favorite from './Favorite';
import * as actions from '../actions/favoriteActions.js';
import { bindActionCreators } from 'redux';
import CircularProgress from 'material-ui/CircularProgress';


class Favorites extends Component {

  componentDidMount() {
    this.props.actions.fetchFavorites();
  };

  render() {
    const {match, favoriteState} = this.props;
    const loading = this.props.loading;

    if (loading) {
      return (<div><CircularProgress size={200} thickness={10} /></div>)
    }

    return (
    <div>
      <Switch>
        <Route path={`${match.url}/:ein`} component={Favorite} />
        <Route exact path={`${match.url}`} render={() => (
          <div>
            <h1>Favorites</h1>
            <FavoriteList favoriteState={favoriteState} />
          </div>
        )} />
      </Switch>
    </div>
  )};

}

const mapStateToProps = (state) => {
  return {
    favoriteState: state.favoritesReducer.favoriteResults,
    loading: state.favoritesReducer.loading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
