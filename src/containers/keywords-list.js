import _ from 'lodash'
import React, { Component } from "react"
import { connect } from 'react-redux'
import { keywordsList } from '../actions'
import { Link } from 'react-router-dom'


class KeywordsList extends Component {

    componentDidMount() {
        this.props.keywordsList()
    }

    renderKeyword() {
        return _.map(this.props.keywords, keyword => {
            return (
                <tr key={keyword._id}>
                    <td><Link to={`/keywords/show/${keyword._id}`}>{keyword.name}</Link></td>
                    <td>{keyword.password}</td>
                    <td>
                        <div className="btn-group" role="group">
                          <Link className="btn btn-secondary btn-sm" role="button" to={`/edit/${keyword._id}`}>edit</Link>
                          <Link className="btn btn-info btn-sm" role="button" to={`/delete/${keyword._id}`}>delete</Link>
                        </div>
                    </td>
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
                    <th scope="col"></th>
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