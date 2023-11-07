import { Outlet } from 'react-router-dom';
import App from '../App';

const MainLayout = () => {
    return (
        <div>
            <App></App>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;