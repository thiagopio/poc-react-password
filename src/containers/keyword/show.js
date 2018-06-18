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
                <h1 className="display-4">{this.props.keyword.name}</h1>
                <h1 className="display-4">{this.props.keyword.password}</h1>
            </div>
        )
    }
}

function mapStateToProps( { keywords }) {
    return { keyword: keywords }
}

export default connect(mapStateToProps, { keywordFindByID })(KeywordShow)