import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFavoriteFormData } from '../actions/favoriteFormActions';
import { bindActionCreators } from 'redux';
import { addFavorite } from '../actions/charityActions';
import { updateFavorite } from '../actions/favoriteActions';
import RaisedButton from 'material-ui/RaisedButton';


class FavoriteForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentFavoriteFormData = Object.assign({}, this.props.favoriteFormData, {[name]: value});
    this.props.updateFavoriteFormData(currentFavoriteFormData);
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.updateFavorite(this.props.favoriteFormData, this.props.favoriteID);
  }


  render() {
    const { charityName, ein, notes } = this.props.favoriteFormData;
    this.props.favoriteFormData['charityName'] = this.props.charityName;
    this.props.favoriteFormData['ein'] = this.props.ein;

    return (
      <div>
        <form onSubmit={this.handleOnSubmit.bind(this)}>
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
    addFavorite,
    updateFavorite
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteForm);
