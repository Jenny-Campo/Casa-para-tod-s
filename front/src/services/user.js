import api from "./api";

export const signupService = async (data) => {  // EN VIDEO PONE NOMBRE, EMAIL, CONTRASEÑA... pero en proyecto puso data, es correcto?? min. 33 del vídeo
    console.log(data) 
    try{
        const result = await api.post('auth/signup', data)
        return result.data
        
    } catch (error) {
        return { err: error }
    }

    // localStorage.setItem('email', response.data.email) // en el video mete el localStorage en el componente
    // localStorage.setItem('token', response.data.token)
}

export const loginService = async (data) => {
    try{
        console.log(data)
        const result = await api.post('auth/login', data)
        console.log('result:', result)
        return result //.data
        
    } catch (error) {
        return { err: error }
    }

    // const response = await api.post('auth/login', data)
    // localStorage.setItem('email', response.data.email)
    // localStorage.setItem('token', response.data.token)
}