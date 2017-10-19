import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoriteList from '../components/FavoriteList';
import { fetchFavorites } from '../actions/favoriteActions.js';
import { bindActionCreators } from 'redux';
import Button from 'react-toolbox/lib/button/Button';

class Favorites extends Component {

  handleOnClick = () => {
    this.props.fetchFavorites();
  };

  render() {
    return (
    <div>
      <h1>FAVORITES</h1>
      <Button onClick={this.handleOnClick} raised ripple primary>
        Search
      </Button>
      <FavoriteList favoriteState={this.props.favoriteState} />
    </div>
  )};

}

const mapStateToProps = (state) => {
  console.log('mapstatetoprops' + state.charitiesIndex.payloadfaves);
  return {
    favoriteState: state.favoritesIndex.payloadfaves,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchFavorites: fetchFavorites
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
