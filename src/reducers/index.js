import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import termReducer from './searchTerm';

export default combineReducers({
    articles: searchReducer,
    searchTerm: termReducer
});