import api from "./api";

export const signup = async (data) => {
    const response = await api.post('auth/signup', data)
    localStorage.setItem('email', response.data.email)
    localStorage.setItem('token', response.data.token)
}

export const login = async (data) => {
    const response = await api.post('auth/login', data)
    localStorage.setItem('email', response.data.email)
    localStorage.setItem('token', response.data.token)
}