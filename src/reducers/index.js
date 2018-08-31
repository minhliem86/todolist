import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import toggleReducer from './toggleReducer';

const reducer = combineReducers({
    itemReducer: itemReducer, toggleReducer
});

export default reducer;