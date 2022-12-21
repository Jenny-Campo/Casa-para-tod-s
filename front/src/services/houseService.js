import api from "./apiService"

export const createHouseAdService = async (data) => {  
    
    try{
        const result = await api.post('house/ad', data, { headers: { token: localStorage.getItem('token')}})
        return result.data
        
    } catch (error) {
        return { err: error }
    }
}

export const getOwnHouseAdService = async () => {
    
    try{
        const { data } = await api.get('house/ad', { headers: { token: localStorage.getItem('token')}})
        return data
        
    } catch (error) {
        return { err: error }
    }
}

export const getHouseAd = async (id) => {
    try{
        const { data } = await api.get(`house/ad/${id}`, { headers: { token: localStorage.getItem('token')}})
        return data
        
    } catch (error) {
        return { err: error }
    }
}


