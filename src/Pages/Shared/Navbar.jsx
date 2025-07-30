import { Link, NavLink } from 'react-router-dom';
import icon from '../../assets/logo.png'

const Navbar = () => {
    const lists = <>
        <li><NavLink to="/" className={({ isActive }) => `md:px-10 md:py-2 ${isActive ? 'bg-pink-500 text-white font-semibold' : ''}`}>Home</NavLink></li>
        <li><NavLink to="/ourPortfolio" className={({ isActive }) => `md:px-10 md:py-2 ${isActive ? 'bg-pink-500 text-white font-semibold' : ''}`}>Our Portfolio</NavLink></li>
        <li><NavLink to="/ourTeam" className={({ isActive }) => `md:px-10 md:py-2 ${isActive ? 'bg-pink-500 text-white font-semibold' : ''}`}>Our Team</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => `md:px-10 md:py-2 ${isActive ? 'bg-pink-500 text-white font-semibold' : ''}`}>Contact Us</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => `md:px-10 md:py-2 ${isActive ? 'bg-pink-500 text-white font-semibold' : ''}`}>Login</NavLink></li>
    </>
    return (
        <div className="navbar pt-4 fixed z-10 bg-opacity-30 md:max-w-7xl md:mx-auto md:left-1/2 md:-translate-x-1/2 md:top-0 md:w-full">
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
    );
};

export default Navbar;