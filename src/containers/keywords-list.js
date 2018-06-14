import _ from 'lodash'
import React, { Component } from "react"
import { connect } from 'react-redux'
import { keywordsList } from '../actions'


class KeywordsList extends Component {

    componentDidMount() {
        this.props.keywordsList()
    }

    renderKeyword() {
        return _.map(this.props.keywords, keyword => {
            return (
                <tr key={keyword._id}>
                    <td>{keyword.name}</td>
                    <td>{keyword.password}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Password</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderKeyword()}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ keywords }) {
    return { keywords }
}

export default connect(mapStateToProps, { keywordsList })(KeywordsList)