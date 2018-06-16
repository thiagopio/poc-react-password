import _ from 'lodash'
import React, { Component } from "react"
import { connect } from 'react-redux'
import { keywordsList, keywordDeleteByID } from '../actions'
import { Link } from 'react-router-dom'


class KeywordsList extends Component {

    componentDidMount() {
        this.props.keywordsList()
    }

    onClickDelete(id) {
        if (confirm("Are you right?")) {
            this.props.keywordDeleteByID(id, () => {
                this.props.keywordsList()
            })
        }
    }

    renderKeywords() {
        return _.map(this.props.keywords, keyword => {
            return (
                <tr key={keyword._id}>
                    <td><Link to={`/keyword/show/${keyword._id}`}>{keyword.name}</Link></td>
                    <td>{keyword.password}</td>
                    <td>
                        <div className="btn-group" role="group">
                          <Link className="btn btn-info btn-sm" role="button" to={`/keyword/edit/${keyword._id}`}>edit</Link>
                          <button className="btn btn-danger btn-sm" onClick={this.onClickDelete.bind(this, keyword._id)}>delete</button>
                        </div>
                    </td>
                </tr>
            )
        })
    }

    render() {
        if (!_.isArray(this.props.keywords)){
            return <div>loading...</div>
        }

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
                    {this.renderKeywords()}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ keywords }) {
    return { keywords }
}

export default connect(mapStateToProps, { keywordsList, keywordDeleteByID })(KeywordsList)