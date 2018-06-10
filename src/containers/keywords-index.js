import React from 'react'
import KeywordsList from './keywords-list'
import KeywordSearch from './keyword-search'

const KeywordsIndex = () => {
    return (
        <div>
            <KeywordSearch />
            <KeywordsList />
        </div>
    )
}

export default KeywordsIndex