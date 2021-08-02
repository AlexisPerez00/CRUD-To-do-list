import axios from "axios"

export const read = async () => {

    const promise = await axios({
        method: 'GET',
        url: '/todos',
        baseURL: 'https://todos-go.herokuapp.com/api/'
    })
    return promise.data
}