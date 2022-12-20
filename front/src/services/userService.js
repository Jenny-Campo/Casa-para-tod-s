import api from "./apiService"

async function getOwnProfile() {

    try{
        const { data } = await api.get('user/profile', { headers: { token: localStorage.getItem('token')}})
        console.log(data)
        return data
        
    } catch (error) {
        return { err: error }
    }
}

export default getOwnProfile


