const toggleReducer = (state = {
    isShow: false
}, action) => {
    switch (action.type) {
        case "OPEN_FORM":
            state = {
                isShow: true,
            };
            return state;

        case 'CLOSE_FORM':
            state = {
                isShow: false,
            }
            return state;
        default :
            return state;
    }
}

export default toggleReducer;