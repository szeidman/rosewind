import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/starActions.js';
import { bindActionCreators } from 'redux';
import FlatButton from 'material-ui/FlatButton';

class Star extends Component {

  handleOnClick = () => {
    debugger;
    this.props.actions.toggleStar();
  };

  render() {
    return (
      <div>
        <FlatButton onClick={this.handleOnClick}>"Activated: " + {String(this.props.activated)}</FlatButton>
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
