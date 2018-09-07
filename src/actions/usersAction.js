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
                dispatch(createUserSuccess(res.data))
            })
    }
}

export function createUserSuccess(data){
    return {
        type: 'CREATE_USER',
        payload: data
    }
}

