import _ from 'lodash'
import React, { Component } from "react"
import { connect } from "react-redux"
import { keywordFindByName, keywordsList } from "../actions"

class KeywordSearch extends Component {
    constructor(props) {
        super(props)
        this.state = { term: '' }
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onChangeInput(term) {
        this.setState( { term } )
    }

    onFormSubmit(event) {
        event.preventDefault()
        const term = this.state.term
        if (_.isEmpty(term)) {
            this.props.keywordsList()
        } else {
            this.props.keywordFindByName(this.state.term)
        }
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="input-group">
                    <input type="text" name="term" autoComplete="off" 
                        value={this.state.term}
                        onChange={e => this.onChangeInput(e.target.value)} 
                        className="form-control" />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>
            </form>
        )
    }
}

function mapStateToProps( { keywords } ) {
    return { keywords }
}

export default connect(mapStateToProps, { keywordFindByName, keywordsList })(KeywordSearch)