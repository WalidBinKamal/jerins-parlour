import { Link, NavLink } from 'react-router-dom';
import icon from '../../assets/logo.png'

const AccountNavbar = () => {
    const lists = <>
        <li><NavLink to="/" className={({ isActive }) => `md:px-10 md:py-2 ${isActive ? 'bg-pink-500 text-white font-semibold' : ''}`}>Home</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => `md:px-10 md:py-2 ${isActive ? 'bg-pink-500 text-white font-semibold' : ''}`}>Our Packages</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {lists}
                    </ul>
                </div>
                <div className="flex-1">
                    <Link to={'/'} className="btn btn-ghost w-40 p-4"><img src={icon} alt="" /></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {lists}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="md:px-10 md:py-2 bg-pink-500 text-white font-semibold btn">Login</Link>
            </div>
        </div>
    );
};

export default AccountNavbar;