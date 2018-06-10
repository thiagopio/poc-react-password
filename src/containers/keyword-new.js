import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

class KeywordNew extends Component {
    RenderField(field) {
        return (
            <div className="form-group row">
                <label htmlFor="example" className="col-sm-2 col-form-label">{field.label}</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="example" placeholder="some data" {...field.input} />
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h4>
                    Add Keyword <small class="text-muted">...</small>
                </h4>
                <form>
                    <Field label="Name" name="name" component={this.RenderField} />
                    <Field label="Password" name="password" component={this.RenderField} />
                    <button type="submit" className="btn btn-primary btn-block">Save</button>
                    <Link className="btn btn-secondary btn-block" role="button" to="/">Cancel</Link>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'KeywordNewForm'
})(KeywordNew)