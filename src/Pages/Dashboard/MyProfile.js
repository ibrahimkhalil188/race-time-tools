import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FaRegEdit } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, reset } = useForm();
    const email = user?.email
    const name = user?.displayName
    const url = `http://localhost:5000/user/${email}`
    const onSubmit = data => {
        const updateUser = { ...data, email, name }
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.result) {
                    toast.success("Successfully Updated")
                    refetch()
                    reset()
                }
            }
            )
    };

    const { data: userInfo, refetch } = useQuery(["userInfo", email], () => fetch(url).then(res => res.json()))
    return (
        <div className=' h-[80vh] flex justify-center'>
            <div>
                <div class="card w-96 h-full glass flex justify-center ">
                    <div class="avatar bg-black flex flex-row justify-center items-center">
                        <div class="w-24 mask mask-hexagon">
                            <img src={user?.photoURL ? user?.photoURL : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"} alt="" />

                        </div>
                        <div className='m-2 pt-6'>
                            <h1 className='text-white '>Name: {user?.displayName}</h1>
                            <label for="update-profile-modal" className='btn btn-xs text-white'> <span className='mr-4'>Edit profile</span> <FaRegEdit /></label>

                        </div>
                    </div>
                    <div class="card-body bg-primary text-white">
                        <h1>Email: &nbsp; {user?.email}</h1>
                        <h1>Bio:  &nbsp;  {userInfo?.bio}</h1>
                        <h1>Address:  &nbsp;  {userInfo?.address}</h1>
                        <h1>Education: &nbsp; {userInfo?.institute}</h1>
                        <h1>Data of birth: &nbsp; {userInfo?.dateOfBirth}</h1>
                        <h1>LinkedIn Profile: &nbsp; {userInfo?.linkedin}</h1>
                    </div>


                    <input type="checkbox" id="update-profile-modal" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <form onSubmit={handleSubmit(onSubmit)} class="modal-box">

                            <label for="update-profile-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                            <h1 className='text-primary text-2xl text-center my-4'>{user?.displayName}</h1>

                            <input
                                {...register("bio", { required: true })}
                                type="text" placeholder="Write your Bio" class="input input-bordered input-md w-full max-w-xs" />
                            <input
                                {...register("address")}
                                type="text" placeholder="Write your Address" class="input input-bordered input-md w-full max-w-xs my-2" />
                            <input
                                {...register("institute", { required: true })}
                                type="text" placeholder="Write your Institute" class="input input-bordered input-md w-full max-w-xs" />
                            <input
                                {...register("dateOfBirth", { required: true })}
                                type="date" placeholder="Write your data of birth" class="input input-bordered input-md w-full max-w-xs my-2" />
                            <input
                                {...register("phone", { required: true })}
                                type="number" placeholder="Write your Phone number" class="input input-bordered input-md w-full max-w-xs my-2" />
                            <input
                                {...register("linkedin", { required: true })}
                                type="text" placeholder="Write your Phone number" class="input input-bordered input-md w-full max-w-xs my-2" />


                            <div class="modal-action">
                                <input type="submit" for="update-profile-modal" class="btn" value="Update" />

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyProfile;