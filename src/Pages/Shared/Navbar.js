import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from './Loading';

const Navbar = () => {
    const [open, setClose] = useState(true)
    const [user, loading] = useAuthState(auth);
    if (loading) {
        <Loading></Loading>
    }
    const menu =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Blogs">Blogs</Link></li>
            {
                user ? <li><Link to="/Dashboard">Dashboard</Link></li> : ""
            }
            <li><Link to="/About">About</Link></li>
            {user ? <div class="dropdown dropdown-end dropdown-hover">
                <div class="avatar">
                    <div class="w-12 rounded-full">
                        <img src={user?.photoURL ? user?.photoURL : 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'} alt="" />
                    </div>
                </div>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><span>{user?.displayName}</span></li>
                    <li><span>{user?.email}</span></li>
                    <li> <span onClick={() => {
                        localStorage.removeItem('access')
                        signOut(auth)
                    }}>SignOUt</span></li>
                </ul>
            </div> : <li><Link to="/login">LogIn</Link></li>}


        </>


    return (
        <div className=' bg-base-200 bg-opacity-0 h-[83px]'>
            <div className="navbar container mx-auto justify-between">
                <div>
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to="/" className="font-bold font-mono text-2xl lg:text-4xl">Race<span className='text-red-600'>Time</span>Tools</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-base font-semibold  p-0">
                        {menu}
                    </ul>
                </div>
                <label onClick={() => setClose(!open)} for="my-drawer-2" class="btn btn-ghost text-xl drawer-button lg:hidden">

                    {
                        open ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu ></AiOutlineMenu>
                    }

                </label>
            </div>
        </div>
    );
};

export default Navbar;