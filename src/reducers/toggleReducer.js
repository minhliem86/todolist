const toggleReducer = (state = {
    isShow: false
}, action) => {
    switch (action.type) {
        case "OPEN_FORM":
            state = {
                isShow: true,
            };
            break;
        case 'CLOSE_FORM':
            state = {
                isShow: false,
            }
            break;
    }
    return state;
}

export default toggleReducer;