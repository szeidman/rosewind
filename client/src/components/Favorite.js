import React, { Component } from 'react';
import { connect } from 'react-redux';
import CharityDetail from './CharityDetail';
import './favorite.css';
import FavoriteForm from './FavoriteForm';
import FavoriteDetail from './FavoriteDetail';

class Favorite extends Component {

  render(){

    return (
      <div>
        <CharityDetail charityEIN={this.props.favorite.ein} />
        <FavoriteDetail favorite={this.props.favorite} />
        <FavoriteForm
          charityName={this.props.favorite.charityName}
          ein={this.props.favorite.ein}
          notes={this.props.favorite.notes}
          favoriteID={this.props.favorite.id}
        />
      </div>
    )
  }

};

const mapStateToProps = (state, ownProps) => {
    const favorite = state.favoritesReducer.favoriteResults.find(favorite => favorite.ein == ownProps.match.params.ein); // eslint-disable-line eqeqeq
    if (favorite) {
      return { favorite: favorite }
    } else {
      return { favorite: {} }
    }
}


export default connect(mapStateToProps)(Favorite);
