import React, { Component } from "react"

export default class KeywordSearch extends Component {
    constructor(props) {
        super(props)
        this.state = { term: '' }
        this.onFormSubmit.bind(this)
    }

    onFormSubmit(event) {
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="input-group">
                    <input type="text" name="term" className="form-control" />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>
            </form>
        )
    }
}