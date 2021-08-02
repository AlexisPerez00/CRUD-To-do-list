import axios from "axios";

export const updateItem = async (id , data) => {
    const promise = axios({
        method: "PUT",
        baseURL: "https://todos-go.herokuapp.com/api",
        url: `/todos/${id}`,
        data: data
    })
    return promise
}