import {HttpClient} from "../api/httpClient";

const url = 'https://jsonplaceholder.typicode.com/users'


/*FETCH USER*/
export function getUsers(){
    return (dispatch) => {
        return HttpClient.get(url)
            .then(res => {
                dispatch(fetchUsers(res.data));

            })
    }
}
export function fetchUsers(data) {
    return {
        type : 'FETCH_USERS',
        payload: data
    }
}

/*CREATE USER*/
export function createUser(data){
    return (dispatch) => {
        return HttpClient.post(url,data)
            .then(res => {
                dispatch(createUserSuccess(JSON.parse(res.data.body)))
            })
    }
}

export function createUserSuccess(data){
    return {
        type: 'CREATE_USER',
        payload: data
    }
}

/*REMOVE USER*/
export function removeUser(id) {
    return (dispatch) => {
        return HttpClient.delete(url, id)
            .then(res => {
                dispatch(removeUserSuccess(id));
            })
            .catch( err => {
                console.log(err);
            })
    }
}


export function removeUserSuccess(id) {
    return {
        type: 'REMOVE_USER',
        payload: id
    }
}

/*DIT*/