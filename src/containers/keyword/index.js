import React from 'react'
import KeywordsList from './list'
import KeywordSearch from './search'

const KeywordsIndex = () => {
    return (
        <div>
            <KeywordSearch />
            <KeywordsList />
        </div>
    )
}

export default KeywordsIndex