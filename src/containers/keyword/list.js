import _ from 'lodash'
import React, { Component } from "react"
import { connect } from 'react-redux'
import { keywordsList, keywordsListByFolder, keywordDeleteByID, folderBar } from '../../actions'
import { Link } from 'react-router-dom'
import FolderBar from '../folder/bar'



class KeywordsList extends Component {

    componentDidMount() {
        // console.log('[KeywordsList] mount', this.props.currentFolder)
        const folder_id = this.props.currentFolder
        if (!folder_id || folder_id == 'undefined') {
            this.props.keywordsList()
        } else {
            this.props.keywordsListByFolder(folder_id)
        }
    }

    onClickDelete(id) {
        if (confirm("Are you right?")) {
            this.props.keywordDeleteByID(id, () => {
                this.props.keywordsList()
            })
        }
    }

    onClickLoad(id) {
        // console.log('[KeywordsList] onClickLoad')
        this.props.folderBar(id)
        this.props.keywordsListByFolder(id)
    }

    callbackBar(id) {
        // console.log('[KeywordsList] callbackBar', id)
        if (id == 'undefined') {
            this.props.keywordsList()
        } else {
            this.props.keywordsListByFolder(id)
        }
    }

    verifyLink(keyword) {
        return keyword.type == 'keyword' ? `/keyword/show/${keyword._id}` : `/go/${keyword._id}`
    }

    verifyOptions(keyword) {
        if (keyword.type != 'keyword') {
            return '-'
        }
        return (
            <div className="btn-group" role="group">
                <Link className="btn btn-info btn-sm" role="button" to={`/keyword/edit/${keyword._id}`}>edit</Link>
                <button className="btn btn-danger btn-sm" onClick={this.onClickDelete.bind(this, keyword._id)}>delete</button>
            </div>
        )
    }

    renderKeywords() {
        return _.map(this.props.keywords, keyword => {
            return (
                <tr key={keyword._id}>
                    <td><Link to={this.verifyLink(keyword)} onClick={this.onClickLoad.bind(this, keyword._id)}>{keyword.name}</Link></td>
                    <td>{keyword.type}</td>
                    <td>{keyword.folder}</td>
                    <td>{this.verifyOptions(keyword)}</td>
                </tr>
            )
        })
    }

    render() {
        if (!_.isArray(this.props.keywords)){
            return <div>loading...</div>
        }

        return (
            <div>
                <FolderBar callback={this.callbackBar.bind(this)} />                
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Parent</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderKeywords()}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps({ keywords }) {
    return { keywords }
}

export default connect(mapStateToProps, { keywordsList, folderBar, keywordsListByFolder, keywordDeleteByID })(KeywordsList)
