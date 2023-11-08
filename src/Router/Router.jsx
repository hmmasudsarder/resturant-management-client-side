import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../components/SharedComponents/Login/Login';
import Error from '../components/SharedComponents/Error/Error';
import AllProducts from '../Pages/AllProducts/AllProducts';
import SinglePage from '../Pages/SinglePage/SinglePage';
import Purchase from '../Pages/Purchase/Purchase';
import SignUp from '../components/SharedComponents/SignUp/SignUp';

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
                path:'/singleCard/:id',
                element: <SinglePage></SinglePage>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/purchase/:id',
                element:<Purchase></Purchase>,
                loader: ({params}) => fetch(`http://localhost:5000/purchase/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default Router;