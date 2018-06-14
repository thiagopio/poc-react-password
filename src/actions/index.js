import axios from 'axios'

const URL = 'http://192.168.1.101:5000'

export const KEYWORDS_LIST = 'KEYWORDS_LIST'
export const KEYWORD_CREATE = 'KEYWORD_CREATE'

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