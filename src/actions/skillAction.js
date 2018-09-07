import {HttpClient} from "../api/httpClient";

const url = 'https://jsonplaceholder.typicode.com/users'

export function getUsers(){
    return (dispatch) => {
        return HttpClient.get(url)
            .then(res => {
                dispatch(fetchUsers(res.data))
            })
    }
}

export function fetchUsers(data) {
    return {
        type : 'FETCH_USERS',
        payload: data
    }
}