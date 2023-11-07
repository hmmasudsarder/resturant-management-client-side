import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../components/SharedComponents/Login/Login';
import Error from '../components/SharedComponents/Error/Error';
import AllProducts from '../Pages/AllProducts/AllProducts';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error/>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/allProducts',
                element:<AllProducts></AllProducts>,
                loader: () => fetch('http://localhost:5000/allProducts')
            },
            {
                path: '/login',
                element: <Login></Login>,
            }
        ]
    }
])

export default Router;