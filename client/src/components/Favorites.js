import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import FavoriteList from '../components/FavoriteList';
import Favorite from './Favorite';
import * as actions from '../actions/favoriteActions.js';
import { bindActionCreators } from 'redux';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';


class Favorites extends Component {

  againOnClick() {
    this.componentDidMount()
  }

  componentDidMount() {
    this.props.actions.resetError();
    this.props.actions.fetchFavorites();
  };

  render() {
    const {match, favoriteState} = this.props;
    const loading = this.props.loading;

    if (loading) {
      return (<div><CircularProgress size={200} thickness={10} /></div>)
    }

    if (this.props.hasError) {
      return (
        <div>
          <h3>An error occurred loading your Favorites. Click the button below to try again. If the problem persists, contact your administrator.</h3>
          <RaisedButton onClick={this.againOnClick.bind(this)}>Try Again</RaisedButton>
        </div>
      )
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
    loading: state.favoritesReducer.loading,
    hasError: state.favoritesReducer.hasError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
