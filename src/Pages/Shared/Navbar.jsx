import { Link, NavLink, useLocation } from 'react-router-dom';
import icon from '../../assets/logo.png'
import useAuth from '../../Hooks/useAuth';
import { BarLoader } from 'react-spinners';

const Navbar = () => {
    const { user, logout, loading, isLoggingOut, refetch } = useAuth()
    const handleLogOut = () => {
        logout()
        refetch()
    }
    const lists = <>
        <li><NavLink to="/" className={({ isActive }) => `md:px-10 md:py-2 ${isActive ? 'bg-pink-500 text-white font-semibold' : ''}`}>Home</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => `md:px-10 md:py-2 ${isActive ? 'bg-pink-500 text-white font-semibold' : ''}`}>Our Packages</NavLink></li>
        <li><NavLink to="/dashboard" className={({ isActive }) => `md:px-10 md:py-2 ${isActive ? 'bg-pink-500 text-white font-semibold' : ''}`}>Dashboard</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => `md:px-10 md:py-2 ${isActive ? 'bg-pink-500 text-white font-semibold' : ''}`}>Contact Us</NavLink></li>
        {
            user ?
                <li><button onClick={handleLogOut} className='md:px-10 md:py-2'>Log Out</button></li>
                :
                <li><Link to="/login" className='md:px-10 md:py-2' >Login</Link></li>
        }
    </>
    if (loading || isLoggingOut) {
        <BarLoader></BarLoader>
    }
    const location = useLocation()
    return (
        <div className='md:fixed top-0 left-0 md:w-full bg-black bg-opacity-30 z-50'>
            <div className="navbar mx-auto md:w-full md:max-w-7xl px-4 py-2">
                <div className="flex-1">
                    <Link to={'/'} className="btn btn-ghost w-40 p-4"><img src={icon} alt="" /></Link>
                </div>
                <div className="flex-none">
                    <div className='hidden md:flex'>
                        <ul className='menu menu-horizontal px-1 space-x-2'>
                            {lists}
                        </ul>
                    </div>
                    <div className="md:hidden dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {lists}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;