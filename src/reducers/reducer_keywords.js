import { KEYWORDS_LIST, KEYWORD_FIND_ONE } from '../actions'

export default function(state = {}, action) {
    switch (action.type) {
        case KEYWORDS_LIST:
            return action.payload.data
        case KEYWORD_FIND_ONE:
            return action.payload.data
        default:
            return state
    }
}