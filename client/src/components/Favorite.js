import React from 'react';
import { connect } from 'react-redux';
import CharityDetail from './CharityDetail';


const Favorite = ({ favorite }) =>
  <div>
    <CharityDetail charityEIN={favorite.ein} />
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
