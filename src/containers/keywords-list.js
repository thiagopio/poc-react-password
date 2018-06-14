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
                    <td><Link to={`/keyword/show/${keyword.name}`}>{keyword.name}</Link></td>
                    <td>{keyword.password}</td>
                    <td>
                        <div className="btn-group" role="group">
                          <Link className="btn btn-secondary btn-sm" role="button" to="/edit/0">edit</Link>
                          <Link className="btn btn-info btn-sm" role="button" to="/remove/0">delete</Link>
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