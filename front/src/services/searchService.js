import axios from 'axios'

const api = axios.create({
    baseURL: 'http://www.localhost:2222/api/'
})

export const search = async (searchTerm) => {
    const { data } = await api.get(`/search?q=${searchTerm}`)
    return data
}