import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import icon from "../assets/logo.png"
import { FaOpencart } from 'react-icons/fa6';
import { LuListCollapse, LuMessageSquareMore } from 'react-icons/lu';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='w-80 min-h-screen pt-10 text-center'>
                <Link to={'/'} className="btn btn-ghost w-40 p-4"><img src={icon} alt="" /></Link>
                <ul className='menu p-4 w-full mt-5 text-lg'>
                    <li>
                        <NavLink to="/dashboard/booking"
                            className={({ isActive }) => `md:px-5 md:py-2 ${isActive ? 'text-pink-500 font-semibold' : ''}`}
                        >
                            <FaOpencart></FaOpencart>
                            Book</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookingList"
                            className={({ isActive }) => `md:px-5 md:py-2 ${isActive ? 'text-pink-500 font-semibold' : ''}`}
                        >
                            <LuListCollapse></LuListCollapse> 
                            Booking list</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"
                            className={({ isActive }) => `md:px-5 md:py-2 ${isActive ? 'text-pink-500 font-semibold' : ''}`}
                        >
                            <LuMessageSquareMore></LuMessageSquareMore>
                            Review</NavLink>
                    </li>
                </ul>
            </div>
            <div className='bg-slate-100 w-full'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;