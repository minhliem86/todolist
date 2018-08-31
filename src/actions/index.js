export function openFormAction() {
    return {
        type: 'OPEN_FORM',
    }
}

export function closeFormAction() {
    return {
        type: 'CLOSE_FORM',
    }
}

export function addItemAction(data){
    return {
        type: 'ADD_ITEM',
        payload: data,
    }
}

export function removeItemAction(id){
    return {
        type: 'REMOVE_ITEM',
        payload: id,
    }
}


