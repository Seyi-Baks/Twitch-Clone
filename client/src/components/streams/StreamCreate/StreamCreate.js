import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createStream } from '../../../actions';
import { connect } from 'react-redux';

export class StreamCreate extends Component {
    renderError = (meta) => {
        if(meta.touched && meta.error){
            return (
                <div className="ui error message">
                    <div className="header">
                        <p>{meta.error}</p>
                    </div>
                </div>
            )
        }
    }

    renderInput = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error': ''}`;
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} />
               {this.renderError(formProps.meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="title" component={this.renderInput} label="Enter title" />
                    <Field name="description" component={this.renderInput} label="Enter Description"/>
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        )
    }
}

const validate = formValues => {
    const errors = {};

    if(!formValues.title){
       errors.title = 'You must enter a title';
    }

    if(!formValues.description){
        errors.description = 'You must enter a description';
    }

    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
