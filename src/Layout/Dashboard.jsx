import { Link, NavLink, Outlet } from 'react-router-dom';
import icon from "../assets/logo.png"
import { FaOpencart } from 'react-icons/fa6';
import { LuClipboardList, LuListCollapse, LuMessageSquareMore } from 'react-icons/lu';
import { CgProfile } from 'react-icons/cg';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { IoAddSharp } from 'react-icons/io5';
import { MdOutlinePersonAddAlt1 } from 'react-icons/md';
import { CiGrid41 } from 'react-icons/ci';

const Dashboard = () => {
    const { isAdmin } = useAuth()
    return (
        <div className='flex'>
            <div className='w-80 min-h-screen pt-10 text-center'>
                <Link to={'/'} className="btn btn-ghost w-40 p-4"><img src={icon} alt="" /></Link>
                <ul className='menu p-4 w-full mt-5 text-lg'>
                    {
                        isAdmin?.admin ?
                            <>
                                <li>
                                    <NavLink to="/dashboard/orderList"
                                        className={({ isActive }) => `md:px-5 md:py-2 ${isActive ? 'text-pink-500 font-semibold' : ''}`}
                                    >
                                        <LuClipboardList></LuClipboardList>
                                        Order list</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addService"
                                        className={({ isActive }) => `md:px-5 md:py-2 ${isActive ? 'text-pink-500 font-semibold' : ''}`}
                                    >
                                        <IoAddSharp />
                                        Add Service</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/makeAdmin"
                                        className={({ isActive }) => `md:px-5 md:py-2 ${isActive ? 'text-pink-500 font-semibold' : ''}`}
                                    >
                                        <MdOutlinePersonAddAlt1 />
                                        Make Admin</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageServices"
                                        className={({ isActive }) => `md:px-5 md:py-2 ${isActive ? 'text-pink-500 font-semibold' : ''}`}
                                    >
                                        <CiGrid41 />
                                        Manage Sevices</NavLink>
                                </li>
                            </>
                            :
                            <>
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
                                <li>
                                    <NavLink to="/dashboard/myProfile"
                                        className={({ isActive }) => `md:px-5 md:py-2 ${isActive ? 'text-pink-500 font-semibold' : ''}`}
                                    >
                                        <CgProfile className='text-xl'></CgProfile>
                                        My Profile</NavLink>
                                </li>
                            </>
                    }
                </ul>
            </div>
            <div className='bg-slate-100 w-full'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;