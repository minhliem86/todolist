const testReducer = (state = {
    name : "Liem Phan"
}, action) => {
    switch (action.type) {
        case 'SET_NAME' :
            state = {
                ...state,
                name: action.payload
            }
    }
    return state;
}

export default testReducer;