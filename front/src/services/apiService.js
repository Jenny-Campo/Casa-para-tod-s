import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:2222/api/' //process.env.API
})

// dice que hay que hacer lo mismo en el servidor: "crearemos la variable de entorno y allí pondremos la dirección de nuestro backend"

export default api 