import React from 'react';
import { connect } from 'react-redux';
import Star from './Star';


const Favorite = ({ favorite }) =>
  <div>
    <h1>{favorite.ein}</h1>
    <Star />
  </div>;

const mapStateToProps = (state, ownProps) => {
    const favorite = state.favoritesReducer.favoriteResults.find(favorite => favorite.ein == ownProps.match.params.ein);
    if (favorite) {
      return { favorite }
    } else {
      return { favorite: {} }
    }
}


export default connect(mapStateToProps)(Favorite);
