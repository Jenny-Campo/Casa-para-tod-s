import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/HomePage'
import Register from '../pages/RegisterPage'
import Login from '../pages/LoginPage'
import HouseAdPage from '../pages/HouseAdPage'

export const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/register', element: <Register/>},
    {path: '/login', element: <Login/>},
    {path: '/houseAd', element: <HouseAdPage/>}
])