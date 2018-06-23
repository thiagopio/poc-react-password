import _ from 'lodash'
import React, { Component } from "react"
import { connect } from 'react-redux'
import { folderBar } from '../../actions'


class FolderBar extends Component {

    componentDidMount() {
        // console.log('[FolderBar] componentDidMount')
        this.props.folderBar(this.props.current)
    }

    onClickLoad(id) {
        // console.log('[FolderBar] onClickLoad', id)
        this.props.folderBar(id)
        this.props.callback(id)
        
    }

    renderNavigationFolders() {
        return _.map(this.props.folders, (folder, id) => {
            // console.log('[FolderBar] renderNavigationFolders', folder)
            return (
                <div key={id} >
                    <button className="btn btn-secondary btn-sm" style={{marginRight: '5px'}} 
                        onClick={this.onClickLoad.bind(this, folder._id)}>{folder.name}</button>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="row" style={{margin: '15px auto'}}>
                {this.renderNavigationFolders()}
            </div>
        )
    }
}

function mapStateToProps({ folders }) {
    return { folders }
}

export default connect(mapStateToProps, { folderBar })(FolderBar)