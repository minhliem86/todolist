import {remove} from 'lodash';
const usersReducer = (state = {users: [], isEditting: false, dataEdit: {}}, action) => {
    switch (action.type) {
        case 'FETCH_USERS' :
            state = {
                ...state,
                users: action.payload
            }
            return state;
        case 'CREATE_USER' :
            state ={
                users: [...state.users, action.payload]
            }
            return state;

        case 'REMOVE_USER' :
            state = {
                ...state,
            }
            remove(state.users, function (ele) {
                return ele.id === action.payload;
            })
            state = {
                users: state.users
            }
            return state;

        case 'GET_USER':
            return state = {
                ...state,
                users: [action.payload]
            }
        default :
            return state;
    }
}

export default usersReducer;