import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Home/Footer';

const Main = () => {
    return (
        <div className='md:bg-[#FFF5EE]'>
            <div className='text-[#111430] font-poppins'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;