import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/starActions.js';
import { bindActionCreators } from 'redux';

class Star extends Component {

  handleOnClick = () => {
    this.props.actions.toggleStar();
  };

  render() {
    return (
      <div>
        <h1 onClick={this.handleOnClick}>STAR! {this.props.activated}</h1>
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
