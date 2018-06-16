import React, {Component } from 'react'
import { connect } from 'react-redux'
import { keywordFindByID } from '../actions'

class KeywordShow extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.keywordFindByID(id)
    }

    render() {
        return (
            <div>
                <div>{this.props.keyword.name}</div>
                <div>{this.props.keyword.password}</div>
            </div>
        )
    }
}

function mapStateToProps( { keywords }) {
    return { keyword: keywords }
}

export default connect(mapStateToProps, { keywordFindByID })(KeywordShow)