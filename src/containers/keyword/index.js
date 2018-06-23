import React from 'react'
import KeywordsList from './list'
import KeywordSearch from './search'

const KeywordsIndex = (props) => {
    return (
        <div>
            <KeywordSearch />
            <KeywordsList currentFolder={props.match.params.folder} />
        </div>
    )
}

export default KeywordsIndex