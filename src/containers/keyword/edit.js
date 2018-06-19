import _ from 'lodash'
import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { keywordFindByID, keywordUpdate } from '../../actions'
import FolderSelect from '../helper/select-folder'


class KeywordEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {...props, initial: true}
    }
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.keywordFindByID(id)
    }
    
    componentDidUpdate() {
        if (this.state.initial && (!_.isArray(this.props.keyword) && !_.isEmpty(this.props.keyword))) {
            this.props.initialize(this.props.keyword)
            this.setState({initial: false})
        }
    }

    RenderField(field) {
        const { meta : {touched, error }} = field
        const classRoleName = `${touched && error ? 'is-invalid' : ''}`
        const classFeedbackName = `${touched && error ? 'invalid-feedback' : ''}`
        return (
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">{field.label}</label>
                <div className="col-sm-10">
                    <input type={field.type} className={`form-control ${classRoleName}`} {...field.input} />
                    <div className={classFeedbackName}>
                       {touched ? error : ''}
                    </div>
                </div>
            </div>
        )
    }

    RenderSelect(field) {
        const { meta : {touched, error }} = field
        const classRoleName = `${touched && error ? 'is-invalid' : ''}`
        const classFeedbackName = `${touched && error ? 'invalid-feedback' : ''}`
        return (
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">{field.label}</label>
                <div className="col-sm-10">
                    <select className={`form-control ${classRoleName}`} {...field.input}>
                        <FolderSelect />
                    </select>
                    <div className={classFeedbackName}>
                       {touched ? error : ''}
                    </div>
                </div>
            </div>
        )
    }

    onSubmitForm(values) {
        this.props.keywordUpdate(values, () => {
            this.props.history.push('/')
        })
    }

    render() {
        const { handleSubmit, keywords } = this.props
        return (
            <div>
                <h4>
                    Add Keyword <small className="text-muted">...</small>
                </h4>
                <form onSubmit={handleSubmit(this.onSubmitForm.bind(this))}>
                    <Field type="hidden" name="id" component={this.RenderField} />
                    <Field type="text" label="Name" name="name" component={this.RenderField} />
                    <Field type="text" label="Password" name="password" component={this.RenderField} />
                    <Field label="Folder" name="folder" component={this.RenderSelect} />
                    <button type="submit" className="btn btn-primary btn-block">Update</button>
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

function mapStateToProps( { keywords }) {
    return { keyword: keywords }
}

export default reduxForm({
    validate,
    form: 'KeywordEditForm'
})(
    connect(mapStateToProps, { keywordFindByID, keywordUpdate })(KeywordEdit)
)