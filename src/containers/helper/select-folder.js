import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { foldersList } from '../../actions'


class FolderSelect extends Component {

    componentDidMount() {
        this.props.foldersList()
    }
    
    loadOptions() {
        const folders = [{_id: 0, name: 'nenhuma'}, ...this.props.folders]
        return _.map(folders, folder => {
            return (
                <option key={folder._id} value={folder._id}>{folder.name.toUpperCase()}</option>
            )
        })
    }

    render() {
        return this.loadOptions()
    }
}

function mapStateToProps( { folders } ) {
    return { folders }
}

export default connect(mapStateToProps, {foldersList})(FolderSelect)