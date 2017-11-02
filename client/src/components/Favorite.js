import React, { Component } from 'react';
import { connect } from 'react-redux';
import CharityDetail from './CharityDetail';
import './favorite.css';
import FavoriteForm from './FavoriteForm';
import FavoriteDetail from './FavoriteDetail';
import Card from 'material-ui/Card';
import './favoritecard.css';

class Favorite extends Component {

  render(){
    const DetailInfo =
      <Card className="favoritecard">
        <FavoriteDetail favorite={this.props.favorite} />
        <FavoriteForm
          charityName={this.props.favorite.charityName}
          ein={this.props.favorite.ein}
          notes={this.props.favorite.notes}
          favoriteID={this.props.favorite.id}
        />
      </Card>
    ;

    const WaitToLoad = (!!this.props.loading) ? null : DetailInfo;

    return (
      <div>
        <CharityDetail charityEIN={this.props.favorite.ein} />
        {WaitToLoad}
      </div>
    )
  }

};

const mapStateToProps = (state, ownProps) => {
    const favorite = state.favoritesReducer.favoriteResults.find(favorite => favorite.ein == ownProps.match.params.ein); // eslint-disable-line eqeqeq
    const loading = state.charityReducer.loading;
    if (favorite) {
      return { favorite, loading }
    } else {
      return { favorite: {}, loading }
    }
}


export default connect(mapStateToProps)(Favorite);
