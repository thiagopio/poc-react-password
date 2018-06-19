import { FOLDERS_LIST } from '../actions'

export default function(state = {}, action) {
    switch (action.type) {
        case FOLDERS_LIST:
            return action.payload.data
        default:
            return state
    }
}