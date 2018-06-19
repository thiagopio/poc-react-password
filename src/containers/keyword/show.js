import React, {Component } from 'react'
import { connect } from 'react-redux'
import { keywordFindByID } from '../../actions'

class KeywordShow extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.keywordFindByID(id)
    }

    render() {
        return (
            <div>
                <h1 className="display-4"><small>ID</small>: {this.props.keyword.name}</h1>
                <h1 className="display-4"><small>PWD</small>: {this.props.keyword.password}</h1>
                <h1 className="display-4"><small>PATH</small>: {this.props.keyword.folder}</h1>
            </div>
        )
    }
}

function mapStateToProps( { keywords }) {
    return { keyword: keywords }
}

export default connect(mapStateToProps, { keywordFindByID })(KeywordShow)