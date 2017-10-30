import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFavoriteFormData } from '../actions/favoriteFormActions';
import { bindActionCreators } from 'redux';
import { createFavorite } from '../actions/favoriteActions';

class FavoriteForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentFavoriteFormData = Object.assign({}, this.props.favoriteFormData, {[name]: value});
    this.props.updateFavoriteFormData(currentFavoriteFormData);
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createFavorite(this.props.favoriteFormData);
  }

  render() {
    const { charityName, ein, notes } = this.props.favoriteFormData;
    this.props.favoriteFormData['charityName'] = this.props.charityName;
    this.props.favoriteFormData['ein'] = this.props.ein;

    return (
      <div>
        <h2>Add {this.props.charityName} to favorites?</h2>
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <input
            type="hidden"
            name="charityName"
            value={charityName}
          />
          <input
            type="hidden"
            name="ein"
            value={ein}
          />
          <label htmlFor="notes">Notes:</label>
          <input
            type="text-field"
            onChange={this.handleOnChange}
            name="notes"
            value={notes}
          />
          <button type="submit">Confirm</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteFormData: state.favoriteFormReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateFavoriteFormData,
    createFavorite
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteForm);
