import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import toggleReducer from './toggleReducer';
import usersReducer from './users';

const reducer = combineReducers({
    itemReducer,
    toggleReducer,
    usersReducer
});

export default reducer;