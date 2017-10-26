import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as actions from '../actions/charityActions.js';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class CharityDetail extends Component {

  componentWillMount() {
    debugger;
    const charityEIN = this.props.charityEIN;
    this.props.actions.fetchCharity(charityEIN);
  };

  handleOnClick = () => {
    if (this.props.favorited) {
      const favorite = this.props.favorite;
      this.props.actions.removeFavorite(favorite)
    } else {
      const favorite = `ein=${this.props.infoState["ein"]}&charityName=${this.props.infoState["charityName"]}`;
      this.props.actions.makeFavorite(favorite)
    }
  };

  render() {
    const buttonText = (this.props.favorited) ? "Remove from faves" : "Add to faves";
    return (
    <div>
      <FlatButton onClick={this.handleOnClick.bind(this)}>{buttonText}</FlatButton>
      <h1>{this.props.infoState["charityName"]}</h1>
      <h2>{this.props.infoState['tagline']}</h2>
      <h2>{this.props.infoState['cause']['causeName']}</h2>
      <h2>{this.props.infoState['currentRating']['rating']}</h2>
      <img src={this.props.infoState['currentRating']['ratingImage']['small']} alt="stars" />
      <h2>{this.props.infoState['currentRating']['score']}</h2>
      <h2>{this.props.infoState['mailingAddress']['streetAddress1']}</h2>
      <h2>{this.props.infoState['mailingAddress']['streetAddress2']}</h2>
      <h2>{this.props.infoState['mailingAddress']['city']}</h2>
      <h2>{this.props.infoState['mailingAddress']['stateOrProvince']}</h2>
      <h2>{this.props.infoState['mailingAddress']['postalCode']}</h2>
      <h2>{this.props.infoState['mission']}</h2>
      <h2>{this.props.infoState['ein']}</h2>

    </div>
  )};

}



const mapStateToProps = (state, ownProps) => {
  const findFavorite = state.favoritesReducer.favoriteResults.find(favorite => favorite.ein == ownProps.charityEIN);
  const isFavorite = !!findFavorite;
  const matchedFavorite = (isFavorite) ? findFavorite : ""
  return {
    infoState: state.charityReducer.charityInfo,
    favorited: isFavorite,
    favorite: matchedFavorite
  };
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(CharityDetail);
