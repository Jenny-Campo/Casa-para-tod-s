import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/HomePage'
import Register from '../pages/RegisterPage'
import Login from '../pages/LoginPage'
import HouseAdPage from '../pages/HouseAdPage'
import HouseAdInfoPage from '../pages/HouseAdInfoPage'
import UsersMenuPage from '../pages/UserMenuPage'
import InfoAppPage from '../pages/InfoAppPage'
import OwnerProfile from '../pages/OwnerProfilePage'
import UpdateOwnProfilePage from '../pages/UpdateOwnProfilePage'
import CreateHouseAdPage from '../pages/CreateHouseAdPage'
import GetOwnProfilePage from '../pages/GetOwnProfilePage'

export const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/register', element: <Register/>},
    {path: '/login', element: <Login/>},
    {path: '/houseAd', element: <HouseAdPage/>},
    {path: '/houseInfo', element: <HouseAdInfoPage/>},
    {path: '/userMenu', element: <UsersMenuPage/>},
    {path: '/userMenu', element: <UsersMenuPage/>},
    {path: '/infoApp', element: <InfoAppPage/> },
    {path:'/ownerprofile', element: <OwnerProfile/>},
    {path: '/getOwnProfile', element: <GetOwnProfilePage/> },
    {path: '/updateProfile', element: <UpdateOwnProfilePage/> },
    {path: '/createHouseAd', element: <CreateHouseAdPage/> }
    
])