import {combineReducers} from 'redux';
import toggleForm from './toggleForm';
import ListToDo from './ListToDo';


const reducer = combineReducers({
    toggleForm, ListToDo
});

export default reducer;