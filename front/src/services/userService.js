import api from "./apiService"

 export async function getOwnProfile() {

    try{
        const { data } = await api.get('user/profile', { headers: { token: localStorage.getItem('token')}})
        return data
        
    } catch (error) {
        return { err: error }
    }
}

export async function getOwnerProfile(id) {
    try{
        const { data } = await api.get(`user/profile/${id}`, { headers: { token: localStorage.getItem('token')}})
        return data
        
    } catch (error) {
        return { err: error }
    }
}



