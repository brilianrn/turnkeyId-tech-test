import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';

const reducer = combineReducers({ peopleReducer });

export default reducer;