import { combineReducers } from 'redux';
import { reducer as keywordFormReducer } from 'redux-form'
import KeywordsReducer from './reducer_keywords'
import FoldersReducer from './reducer_folders'

const rootReducer = combineReducers({
  keywords: KeywordsReducer,
  folders: FoldersReducer,
  form: keywordFormReducer
});

export default rootReducer;
