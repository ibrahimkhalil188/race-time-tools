import React from 'react';

import { useQuery } from 'react-query';
import { toast } from 'react-toastify';


const AllUser = () => {

    const { data: alluser, refetch } = useQuery("alluser", () => fetch("https://race-time-tools.herokuapp.com/user").then(res => res.json()))

    const makeAdmin = (email) => {
        fetch(`https://race-time-tools.herokuapp.com/user/admin/${email}`, {
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

    const deleteUser = id => {
        fetch(`https://race-time-tools.herokuapp.com/user/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        }).then(res => res.json())
            .then(data => {
                toast.success("User deleted success")
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
                                    <button className='btn btn-warning btn-xs' onClick={() => deleteUser(singleUser?._id)}>Delete</button>
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