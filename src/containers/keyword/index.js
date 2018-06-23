import React from 'react'
import KeywordsList from './list'
import SearchInput from '../helper/search-input'

const KeywordsIndex = (props) => {
    return (
        <div>
            <SearchInput />
            <KeywordsList currentFolder={props.match.params.folder} />
        </div>
    )
}

export default KeywordsIndex