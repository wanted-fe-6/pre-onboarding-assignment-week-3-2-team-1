import { combineReducers } from 'redux';
import comments from './comments';
import form from './form';
import localComments from './localComments';

const rootReducer = combineReducers({ comments, form, localComments });

export default rootReducer;
