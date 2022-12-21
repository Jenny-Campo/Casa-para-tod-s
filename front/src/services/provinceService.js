import api from "./apiService"

async function provinceService() {

    try{
        const { data } = await api.get('province')
        return data
        
    } catch (error) {
        return { err: error }
    }
}

export default provinceService