import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFavoriteFormData } from '../actions/favoriteFormActions';
import { bindActionCreators } from 'redux';
import { updateFavorite, viewEditForm, hideEditForm } from '../actions/favoriteActions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class FavoriteForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentFavoriteFormData = Object.assign({}, this.props.favoriteFormData, {[name]: value});
    this.props.updateFavoriteFormData(currentFavoriteFormData);
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.hideEditForm();
    this.props.updateFavorite(this.props.favoriteFormData, this.props.favoriteID);
  }

  handleOnClick = () => {
    this.initializeNotes();
    this.props.viewEditForm();
  };

  initializeNotes() {
    const initialFavoriteFormData = Object.assign({}, this.props.favoriteFormData, {notes: this.props.notes});
    this.props.updateFavoriteFormData(initialFavoriteFormData);
  }

  render() {
    this.props.favoriteFormData['charityName'] = this.props.charityName;
    this.props.favoriteFormData['ein'] = this.props.ein;

    if (!!this.props.formView && !!this.props.ein) {
      return (
        <div className="favoriteInfo">
          <form onSubmit={this.handleOnSubmit.bind(this)}>
            <TextField
              type="text-field"
              floatingLabelText="Notes"
              onChange={this.handleOnChange}
              name="notes"
              defaultValue={this.props.favoriteFormData['notes']}
              multiLine={true}
              rows={10}
            />
            <RaisedButton type="submit" primary={true} label="Confirm Changes"/>
          </form>
        </div>
      )
    } else if (!!this.props.ein) {
      const noteButton = (this.props.notes === "") ? "Add Notes" : "Edit Notes";
      return (
        <div className="favoriteInfo">
          <RaisedButton onClick={this.handleOnClick} primary={true} label={noteButton} />
        </div>
      )
    } else {
      return null;
    }


  }
}

const mapStateToProps = (state) => {
  return {
    favoriteFormData: state.favoriteFormReducer,
    formView: state.favoriteReducer.formView
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateFavoriteFormData,
    updateFavorite,
    viewEditForm,
    hideEditForm
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteForm);
