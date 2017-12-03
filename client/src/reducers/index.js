import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveyReducer from './surveyReducer';

//the key, is the name of the object that would be
//stored in our state object and will be used by our
//components.
export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveyReducer
});