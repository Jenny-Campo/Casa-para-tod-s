import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/HomePage'
import Register from '../pages/RegisterPage'

export const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/register', element: <Register/>}
])