import api from "./apiService"

export const createHouseAdService = async (data) => {  

    try{
        const result = await api.post('house/ad', data, { headers: { token: localStorage.getItem('token')}})
        return result.data
        
    } catch (error) {
        return { err: error }
    }

    // localStorage.setItem('email', response.data.email) 
    // localStorage.setItem('token', response.data.token)
}

export default createHouseAdService