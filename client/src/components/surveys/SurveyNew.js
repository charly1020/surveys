//Survey new
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  
  state = { showFormReview: false };
  
  renderContent() {
    if(this.state.showFormReview === true) {
      return <SurveyFormReview
        onCancel={ () => this.setState({ showFormReview: false})}
      />
    }
    
    return <SurveyForm onSurveySubmit={ () => this.setState({ showFormReview: true})}/>;
  }
  
  render() {
    return (
      <div>
        { this.renderContent() }
      </div>
    )
  }
}

//The defaul behaviour of redux form is to delete the store
//so, when this component is unmounted we achieve our pourposse of
//clear up the redux form store
export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);