import Item from '../mocks/item';

const ListToDo = (state = {Item}, action) => {
    switch (action.type) {
        case 'IS_ADDING' :
            return {
                ...state, items: action.item
            };
            break;

        case 'IS_REMOVE' :
            return {
                ...state,
            };
            break;
        default:
            return state;
    }
}

export default ListToDo;