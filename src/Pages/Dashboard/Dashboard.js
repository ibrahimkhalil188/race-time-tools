import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const email = user?.email
    const { data: currentUser } = useQuery("currentUser", () => fetch(`http://localhost:5000/user/${email}`).then(res => res.json()))


    return (
        <div className='container'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">

                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to='myorder'>My Order</Link></li>
                        <li className='my-2'><Link to='myprofile'>My Profile</Link></li>
                        <li><Link to='addreview'>Add Review</Link></li>
                        {
                            currentUser?.role === "admin" && <li> <Link to='alluser'>All User</Link></li>
                        }

                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;