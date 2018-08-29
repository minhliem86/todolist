import Items from '../mocks/item';

const ListToDo = (state = {arr: Items}, action) => {
    switch (action.type) {
        case 'IS_ADDING' :
            return {
                ...state, arr: Items.push(action.data)
            }

        case 'IS_REMOVE' :
            return {

            };
        default:
            return state.arr;
    }
}

export default ListToDo;