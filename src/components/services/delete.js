import axios from "axios";

export const deleteItem = async (id) => {
    const promise = axios({
        method: 'DELETE',
        baseURL: 'https://todos-go.herokuapp.com/api/',
        url: `/todos/${id}`
    })
    return promise
}