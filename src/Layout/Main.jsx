import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    const location = useLocation()    
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signup')
    return (
        <div className='md:bg-[#FFF5EE]'>
            <div className='text-[#111430] font-poppins'>
                {noHeaderFooter || <Navbar></Navbar>}
                <Outlet></Outlet>
                {noHeaderFooter || <Footer></Footer>}
            </div>
        </div>
    );
};

export default Main;