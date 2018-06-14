import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { keywordCreate } from '../actions'

class KeywordNew extends Component {
    RenderField(field) {
        const { meta : {touched, error }} = field
        const classRoleName = `${touched && error ? 'is-invalid' : ''}`
        const classFeedbackName = `${touched && error ? 'invalid-feedback' : ''}`
        return (
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">{field.label}</label>
                <div className="col-sm-10">
                    <input type="text" className={`form-control ${classRoleName}`} {...field.input} />
                    <div className={classFeedbackName}>
                       {touched ? error : ''}
                    </div>
                </div>
            </div>
        )
    }

    onSubmitForm(values) {
        this.props.keywordCreate(values, () => {
            this.props.history.push('/')
        })
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div>
                <h4>
                    Add Keyword <small className="text-muted">...</small>
                </h4>
                <form onSubmit={handleSubmit(this.onSubmitForm.bind(this))}>
                    <Field label="Name" name="name" component={this.RenderField} />
                    <Field label="Password" name="password" component={this.RenderField} />
                    <button type="submit" className="btn btn-primary btn-block">Save</button>
                    <Link className="btn btn-secondary btn-block" role="button" to="/">Cancel</Link>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {}
    
    if (!values.name) {
        errors.name = "Enter with a name"
    }

    if (!values.password) {
        errors.password = "Enter with a password"
    }

    return errors
}

export default reduxForm({
    validate,
    form: 'KeywordNewForm'
})(
    connect(null, { keywordCreate })(KeywordNew)
)