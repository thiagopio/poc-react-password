import axios from 'axios'

// const URL = 'http://192.168.1.101:5000'
const URL = 'http://localhost:5000'

export const KEYWORDS_LIST = 'KEYWORDS_LIST'
export const KEYWORD_CREATE = 'KEYWORD_CREATE'
export const KEYWORD_FIND_ONE = 'KEYWORD_FIND_ONE'
export const KEYWORD_DELETE = 'KEYWORD_DELETE'
export const KEYWORD_UPDATE = 'KEYWORD_UPDATE'
export const KEYWORDS_BY_NAME = 'KEYWORDS_BY_NAME'
export const KEYWORDS_BY_FOLDER = 'KEYWORDS_BY_FOLDER'
export const FOLDER_CREATE = 'FOLDER_CREATE'
export const FOLDERS_LIST = 'FOLDERS_LIST'
export const FOLDER_PATH = 'FOLDER_PATH'
export const FOLDER_BAR = 'FOLDER_baR'

export function keywordsList() {
    const url = `${URL}/tree`
    const request = axios.get(url)
    return {
        type: KEYWORDS_LIST,
        payload: request
    }
}
export function keywordsListByFolder(folderId) {
    const url = `${URL}/tree/byfolder/${folderId}`
    const request = axios.get(url)
    return {
        type: KEYWORDS_BY_FOLDER,
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

export function searchByName(name) {
    const url = `${URL}/tree/search/${name}`
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

export function foldersList() {
    const url = `${URL}/folder/list`
    const request = axios.get(url)
    return {
        type: FOLDERS_LIST,
        payload: request
    }
}

export function folderBar(current_folder) {
    const url = `${URL}/folder/bar/${current_folder}`
    const request = axios.get(url)
    return {
        type: FOLDER_BAR,
        payload: request
    }
}