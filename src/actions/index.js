import axios from 'axios'

const URL = 'http://localhost:5000'

export const KEYWORDS_LIST = 'KEYWORDS_LIST'
export const KEYWORD_CREATE = 'KEYWORD_CREATE'
export const KEYWORD_FIND_ONE = 'KEYWORD_FIND_ONE'

export function keywordsList() {
    const url = `${URL}/list`
    const request = axios.get(url)
    return {
        type: KEYWORDS_LIST,
        payload: request
    }
}

export function keywordCreate(values, callback) {
    const url = `${URL}/add`
    const request = axios.post(url, values).then(() => callback())
    return {
        type: KEYWORD_CREATE,
        payload: request
    }
}

export function keywordFindByID(id) {
    const url = `${URL}/id/${id}`
    const request = axios.get(url)
    return {
        type: KEYWORD_FIND_ONE,
        payload: request
    }
}
