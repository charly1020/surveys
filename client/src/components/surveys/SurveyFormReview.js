//SurveyFormReview shows user their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

//Each of this arguments are taken or from the componets who is calling this one
//or the 'decorators' that are connected to add some functionallity
/**
 *
 * @param onCancel is taken from props of SurveyNew
 * @param formValues is taken from form of redux-form
 * @param submitSurvey is an action taken from reducers
 * @param history is taken from react-router-dom (after connect)
 * @returns {XML}
 * @constructor
 */
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  
  const reviewFields = _.map(formFields, ({ name, label}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    )
  });
  
  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={ () => submitSurvey(formValues, history)}
        className="green btn-flat right white-text">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
  
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));