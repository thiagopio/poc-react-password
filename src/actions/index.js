import axios from 'axios'

const URL = 'http://192.168.1.101:5000'

export const KEYWORDS_LIST = 'KEYWORD_LIST'

export function keywordsList() {
    const url = `${URL}/list`
    const request = axios.get(url)
    return {
        type: KEYWORDS_LIST,
        payload: request
    }
}