import axios from 'axios'

const URL = 'http://192.168.1.101:5000'

export const KEYWORDS_LIST = 'KEYWORDS_LIST'
export const KEYWORD_CREATE = 'KEYWORD_CREATE'
export const KEYWORD_FIND_ONE = 'KEYWORD_FIND_ONE'
export const KEYWORD_DELETE = 'KEYWORD_DELETE'
export const KEYWORD_UPDATE = 'KEYWORD_UPDATE'
export const KEYWORDS_BY_NAME = 'KEYWORDS_BY_NAME'
export const FOLDER_CREATE = 'FOLDER_CREATE'

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

export function keywordDeleteByID(id, callback) {
    const url = `${URL}/rem/${id}`
    const request = axios.delete(url).then(() => callback())
    return {
        type: KEYWORD_DELETE,
        payload: request
    }
}

export function keywordUpdate(values, callback) {
    const url = `${URL}/update`
    const request = axios.put(url, values).then(() => callback())
    return {
        type: KEYWORD_UPDATE,
        payload: request
    }
}

export function keywordFindByName(name) {
    const url = `${URL}/search/${name}`
    const request = axios.get(url)
    return {
        type: KEYWORDS_BY_NAME,
        payload: request
    }
}

export function folderCreate(values, callback) {
    const url = `${URL}/folder/add`
    const request = axios.post(url, values).then(() => callback())
    return {
        type: FOLDER_CREATE,
        payload: request
    }
}
