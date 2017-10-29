import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as actions from '../actions/charityActions.js';
import { bindActionCreators } from 'redux';
import CharityCard from './CharityCard';
import IconButton from 'material-ui/IconButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import {blue300, blue600, blue900} from 'material-ui/styles/colors';
import CircularProgress from 'material-ui/CircularProgress';

class CharityDetail extends Component {

  componentDidMount() {
    const charityEIN = window.location.pathname.split('/')[2];
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
  const findFavorite = state.favoritesReducer.favoriteResults.find(favorite => favorite.ein == ownProps.charityEIN);
  const isFavorite = !!findFavorite;
  const matchedFavorite = (isFavorite) ? findFavorite : ""
  return {
    infoState: state.charityReducer.charityInfo,
    favorited: isFavorite,
    favorite: matchedFavorite,
    loading: state.charityReducer.loading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(CharityDetail);
