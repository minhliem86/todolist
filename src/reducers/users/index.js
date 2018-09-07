const usersReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case 'FETCH_USERS' :
            state = {
                ...state,
                users: action.payload
            }
            return state;
        case 'CREATE_USER' :
            state ={
                ...state,
                users: action.payload
            }
            return state
        default :
            return state;
    }
}

export default usersReducer;