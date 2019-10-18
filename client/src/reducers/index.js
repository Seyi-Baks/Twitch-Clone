import { combineReducers } from 'redux';
import { reducer as ReducerForm } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamsReducer';


export default combineReducers({
    auth: authReducer,
    form: ReducerForm,
    streams: streamReducer
});