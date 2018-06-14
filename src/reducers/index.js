import { combineReducers } from 'redux';
import { reducer as keywordFormReducer } from 'redux-form'
import KeywordsReducer from './reducer_keywords'

const rootReducer = combineReducers({
  keywords: KeywordsReducer,
  form: keywordFormReducer
});

export default rootReducer;
