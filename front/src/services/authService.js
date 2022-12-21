import api from "./apiService";

export const signupService = async (data) => {  
    try{
        const result = await api.post('auth/signup', data)
        return result.data
        
    } catch (error) {
        return { err: error }
    }
}

export const loginService = async (data) => {
    try{
        
        const result = await api.post('auth/login', data)
        
        return result 
        
    } catch (error) {
        return { err: error }
    }
}