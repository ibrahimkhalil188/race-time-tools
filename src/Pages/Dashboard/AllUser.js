import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AllUser = () => {
    const [user] = useAuthState(auth)

    const { data: alluser, refetch } = useQuery("alluser", () => fetch("http://localhost:5000/user").then(res => res.json()))
    console.log(alluser)
    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Admin added")
                refetch()
            })
    }

    return (
        <div>
            <div >
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            alluser?.map((singleUser, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{singleUser?.name ? singleUser?.name : "Update profile"}</td>
                                <td>{singleUser?.email}</td>
                                <td>

                                    {singleUser?.role ? "Admin" :
                                        <button className='btn btn-xs ' onClick={() => makeAdmin(singleUser?.email)}>Make Admin</button>
                                    }</td>
                                <td>
                                    <button className='btn btn-warning btn-xs'>Delete</button>
                                </td>

                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;