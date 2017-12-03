//SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  
  renderFields() {
    return _.map(formFields, field => {
      return <Field key={field.name} component={SurveyField} type="text" {...field}/>
    });
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit( this.props.onSurveySubmit )}>
          { this.renderFields() }
          <Link to='/surveys' className="red btn-flat left white-text" >
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text" >
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};
  
   errors.recipients = validateEmails(values.recipients || '');
   
 _.each(formFields, ({name, errorMsg}) => {
   
   if(!values[name]) {
     errors[name] = errorMsg;
   }
   
 });
  
  return errors;
}

//surveyForm is the name of the key where redux form is going
//to store the data of the form
export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);