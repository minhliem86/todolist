import Items from '../mocks/item';
import {remove} from 'lodash';

const itemReducer = (state = {
    arr: Items,
}, action) => {
    switch (action.type) {
        case 'ADD_ITEM' :
            state = {
                ...state
            }
            return state;
            break;

        case 'REMOVE_ITEM' :
            let newArr = remove(state.arr, function(ele){
                console.log(action.payload);
                return ele.id == action.payload;

            });

            state = {
                ...state,
                arr: newArr
            }
            return state;
            break;

        default:
            return state;
    }

}

export default itemReducer;