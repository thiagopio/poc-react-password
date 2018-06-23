import { KEYWORDS_LIST, KEYWORD_FIND_ONE, KEYWORDS_BY_NAME, KEYWORDS_BY_FOLDER } from '../actions'

export default function(state = {}, action) {
    switch (action.type) {
        case KEYWORDS_LIST:
            return action.payload.data
        case KEYWORD_FIND_ONE:
            return action.payload.data
        case KEYWORDS_BY_NAME:
            return action.payload.data
        case KEYWORDS_BY_FOLDER:
            return action.payload.data
        default:
            return state
    }
}