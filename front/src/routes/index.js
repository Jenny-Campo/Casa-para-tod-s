import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/HomePage'
import Register from '../pages/RegisterPage'
import Login from '../pages/LoginPage'
import HouseAdPage from '../pages/HouseAdPage'
<<<<<<< HEAD
import HouseAdInfoPage from '../pages/HouseAdInfoPage'
=======
import UsersMenuPage from '../pages/UserMenuPage'
>>>>>>> 7d9a2fc6d647a4cba11b015240991825969f54ac

export const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/register', element: <Register/>},
    {path: '/login', element: <Login/>},
    {path: '/houseAd', element: <HouseAdPage/>},
<<<<<<< HEAD
    {path: '/houseInfo', element: <HouseAdInfoPage/>}
=======
    {path: '/userMenu', element: <UsersMenuPage/>}
>>>>>>> 7d9a2fc6d647a4cba11b015240991825969f54ac
])