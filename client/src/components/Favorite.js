import React from 'react';
import { connect } from 'react-redux';
import CharityDetail from './CharityDetail';
import './favorite.css';
import FavoriteForm from './FavoriteForm';


const Favorite = ({ favorite }) =>
  <div>
    <CharityDetail charityEIN={favorite.ein} />
    <div className="favoriteInfo">
      <p>{favorite.ein}</p>
      <p>{favorite.charityName} was added to your favorites on {favorite.created_at}.</p>
      <p>{favorite.notes}</p>
      <FavoriteForm
        charityName={favorite.charityName}
        ein={favorite.ein}
        notes={favorite.notes}
        favoriteID={favorite.id}
      />
    </div>
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
