import { FOLDERS_LIST, FOLDER_BAR } from '../actions'

export default function(state = {}, action) {
    switch (action.type) {
        case FOLDERS_LIST:
            return action.payload.data
        case FOLDER_BAR:
            return action.payload.data
        default:
            return state
    }
}