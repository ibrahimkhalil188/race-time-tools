import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const email = user?.email
    const { data: currentUser } = useQuery("currentUser", () => fetch(`https://race-time-tools.herokuapp.com/user/${email}`).then(res => res.json()))

    const admin = (currentUser?.role === "admin")

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
                        {
                            admin || <li><Link to='myorder'>My Order</Link></li>
                        }
                        <li className='my-2'><Link to='myprofile'>My Profile</Link></li>
                        {
                            admin || <li><Link to='addreview'>Add Review</Link></li>
                        }
                        {
                            admin || <li> <Link to='alluser'>All User</Link></li>
                        }
                        {
                            admin || <li className='my-2'> <Link to='manageorder'>Manage Order</Link></li>
                        }
                        {
                            admin || <li> <Link to='addproduct'>Add Product</Link></li>
                        }
                        {
                            admin || <li> <Link to='manageproduct'>Manage Product</Link></li>
                        }

                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;