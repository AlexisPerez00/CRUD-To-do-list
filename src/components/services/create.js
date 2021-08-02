import axios from 'axios'


export const create = async (body) => {
    const promise = axios({
        method: 'POST',
        baseURL: 'https://todos-go.herokuapp.com/api/',
        url: '/todos',
        data: body
    })

    return promise
}