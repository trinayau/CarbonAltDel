import {Outlet} from 'react-router-dom';
import {Navbar, Footer} from '../components';
import './index.css';


const Layout = () => {


    return ( <div className="flex-wrapper">
        <Navbar />
        <Outlet/>
        <Footer />
    </div> );
}
 
export default Layout;
