import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import login from '../Assets/images/login.jpg'
import google from '../Assets/logo/google.png'
import UseToken from '../Hooks/UseToken';
import Loading from '../Shared/Loading';

const Register = () => {

    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating] = useUpdateProfile(auth);

    const [token] = UseToken(user || guser)

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name, })
    };
    console.log(user)
    useEffect(() => {
        if (gerror || error) {
            toast.error(error?.message || gerror?.message, {
                toastId: 'success1',
            })
        }
    }, [error, gerror])

    if (token) {
        navigate(from, { replace: true })
    }


    if (loading || gloading || updating) {
        return <Loading></Loading>
    }

    return (
        <div className='flex'>
            <img src={login} alt="" />
            <div className='w-full border-4 '>
                <h1 className="text-3xl text-center text-primary mt-4">Register</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="mx-24 my-6">

                    <div class="form-control w-full my-6">
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is Required"
                                }

                            })}
                            type="text"
                            placeholder="Your email"
                            class="input input-bordered "
                        />
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-600 mt-4">{errors.name?.message}</span>}

                    </div>

                    <div class="form-control w-full my-6">
                        <input
                            {...register("email", {
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email"
                                },
                                required: {
                                    value: true,
                                    message: "Email is Required"
                                }

                            })}
                            type="email"
                            placeholder="Your email"
                            class="input input-bordered "
                        />
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-600 mt-4">{errors.email?.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600 mt-4">{errors.email?.message}</span>}

                    </div>

                    <div class="form-control w-full">
                        <input
                            {...register("password", {
                                minLength: {
                                    value: 6,
                                    message: "too short"
                                },
                                required: {
                                    value: true,
                                    message: "Password is Required"
                                }

                            })}
                            type="password"
                            placeholder="Your password"
                            class="input input-bordered w-full mb-4"
                        />
                        {errors.password?.type === 'required' && <span class="label-text-alt text-red-600 my-4">{errors.password?.message}</span>}
                        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-600 my-4">{errors.password?.message}</span>}
                    </div>


                    <button className='btn btn-primary w-full text-white' type="submit" value="LogIn">Register</button>
                </form>
                <div className='text-center text-lg font-serif'>
                    <span>already have an account? </span><Link className='text-primary' to='/login'> LogIn please</Link>
                </div>
                <div class="divider">OR</div>
                <button className='btn btn-primary w-[344px] mx-24 my-4' onClick={() => signInWithGoogle()}><img className='w-12 h-12' src={google} alt="" /> LogIN With google</button>
            </div>
        </div>
    );
};

export default Register;