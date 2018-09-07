import Items from '../mocks/item';
import {remove} from 'lodash';

const itemReducer = (state = {
    arr: Items,
}, action) => {
    switch (action.type) {
        case 'ADD_ITEM' :
            state = {
                ...state,
                arr: [...state.arr, action.payload]
            }
            console.log(action.payload);
            return state;

        case 'REMOVE_ITEM' :
            state = {
                ...state
            }
            remove(state.arr, function(ele){
                return ele.id === action.payload;
            });
            return state;

        default:
            return state;
    }

}

export default itemReducer;