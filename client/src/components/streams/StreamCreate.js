
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {

    renderInput({ input, label }) {

        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        );
    }

    onSubmit(formValues) {

        
    }

    render() {
        
        return (
            // handleSubmit props object provided by redux-form
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className='ui button primary'>Submit</button>
            </form>
        );
    }
}

export default reduxForm({

    form: 'streamCreate'
})(StreamCreate);