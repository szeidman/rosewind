import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharity } from '../actions/charityActions.js';
import { createFavorite, deleteFavorite, clearRedirect } from '../actions/favoriteActions.js';
import { bindActionCreators } from 'redux';
import CharityCard from './CharityCard';
import IconButton from 'material-ui/IconButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import {blue300, blue600, blue900} from 'material-ui/styles/colors';
import CircularProgress from 'material-ui/CircularProgress';
import {withRouter} from "react-router-dom";


class CharityDetail extends Component {

  componentDidMount() {
    const charityEIN = window.location.pathname.split('/')[2];
    this.props.fetchCharity(charityEIN);
  };

  handleOnClick = (event) => {
    if (this.props.favorited) {
      const favorite = this.props.favorite;
      this.props.deleteFavorite(favorite, this.props.history);
    } else {
      this.props.favoriteFormData['charityName'] = this.props.infoState['charityName'];
      this.props.favoriteFormData['ein'] = this.props.infoState['ein'];
      this.props.createFavorite(this.props.favoriteFormData, this.props.history);
    }
  };

  render() {
    const buttonText = (this.props.favorited) ? "Remove from favorites" : "Add to favorites";
    const buttonColor = (this.props.favorited) ? blue900 : blue300;
    const loading = this.props.loading;

    if (loading) {
      return (<div><CircularProgress size={200} thickness={10} /></div>)
    }

    return (
    <div>
      <IconButton
        tooltip={buttonText}
        touch={true}
        tooltipPosition="bottom-right"
        onClick={this.handleOnClick}
        className="charityheart"
      >
        <ActionFavorite
          hoverColor={blue600}
          color={buttonColor}
        />
      </IconButton>
      <CharityCard info={this.props.infoState} />
    </div>
  )};

}

const mapStateToProps = (state, ownProps) => {
  const findFavorite = state.favoritesReducer.favoriteResults.find(favorite => favorite.ein == ownProps.charityEIN); // eslint-disable-line eqeqeq
  const isFavorite = !!findFavorite;
  const matchedFavorite = (isFavorite) ? findFavorite : ""
  return {
    infoState: state.charityReducer.charityInfo,
    favorited: isFavorite,
    favorite: matchedFavorite,
    loading: state.charityReducer.loading,
    favoriteFormData: state.favoriteFormReducer,
    redirect: state.favoritesReducer.redirect
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCharity,
    createFavorite,
    deleteFavorite,
    clearRedirect
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharityDetail));
