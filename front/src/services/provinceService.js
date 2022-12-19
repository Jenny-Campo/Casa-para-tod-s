import api from "./apiService"

async function provinceService() {

    try{
        const { data } = await api.get('province')
        console.log('result en servicio:', data)
        return data
        
    } catch (error) {
        return { err: error }
    }
}

export default provinceService