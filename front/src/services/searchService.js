import api from './apiService'

export const search = async (searchTerm) => {
    const { data } = await api.get(`/province/${searchTerm}`)
    return data
}