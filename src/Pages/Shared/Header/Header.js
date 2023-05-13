import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import './Header.css'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuItems = <> <li className='font-semibold'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
    </li>
        {
            user?.email ?
                <>  
                    <li className='font-semibold'>
                        <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
                    </li>
                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img className='png' src={logo} alt="" />
                        <h3>Coffee Shop</h3>
                    </Link>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;