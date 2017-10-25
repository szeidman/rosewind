import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/starActions.js';
import { bindActionCreators } from 'redux';
import FlatButton from 'material-ui/FlatButton';

class Star extends Component {

  handleOnClick = () => {
    const ein = this.props.ein
    this.props.actions.toggleStar(ein);
  };

  render() {
    const starness = (this.props.activated) ? "Remove from faves" : "Add to faves";
    return (
      <div>
        <FlatButton onClick={this.handleOnClick}>{starness}</FlatButton>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activated: state.starReducer.activated,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Star);
