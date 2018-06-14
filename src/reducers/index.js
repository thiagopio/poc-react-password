import { combineReducers } from 'redux';
import KeywordsReducer from './reducer_keywords'

const rootReducer = combineReducers({
  keywords: KeywordsReducer
});

export default rootReducer;
