import { KEYWORDS_LIST } from '../actions'

export default function(state = {}, action) {
    switch (action.type) {
        case KEYWORDS_LIST:
            return action.payload.data
        default:
            return state
    }
}