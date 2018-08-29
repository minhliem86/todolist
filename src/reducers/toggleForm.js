const toggleForm = (state = {toggle: false}, action ) => {
    switch (action.type) {
        case 'TOGGLE_FORM' :
            return !state.toggle;

        default:
            return state.toggle;
    }
}

export default toggleForm;