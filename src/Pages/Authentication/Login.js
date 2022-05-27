import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import login from '../Assets/images/login.jpg'
import google from '../Assets/logo/google.png'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import UseToken from '../Hooks/UseToken';
const Login = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [token] = UseToken(user || guser)
    console.log(guser)
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    useEffect(() => {
        if (gerror || error) {
            toast.error(error?.message || gerror?.message, {
                toastId: 'success1',
            })
        }
    }, [error, gerror])

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, navigate, from])


    if (loading || gloading) {
        return <Loading></Loading>
    }


    return (
        <div className='lg:flex'>
            <img src={login} alt="" />
            <div className='w-full border-4 '>
                <h1 className="text-3xl text-center text-primary mt-4">Log In</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="mx-6 lg:mx-24 my-6">
                    <div class="form-control w-full mb-6">
                        <input
                            {...register("email", {
                                pattern: {
                                    value: "",
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
                            class="input input-bordered w-full "
                        />
                        {errors.password?.type === 'required' && <span class="label-text-alt text-red-600 my-4">{errors.password?.message}</span>}
                        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-600 my-4">{errors.password?.message}</span>}
                    </div>
                    <button className='btn btn-primary w-full text-white mt-4' type="submit" value="LogIn">LogIn</button>
                </form>
                <div className='text-center text-lg font-serif'>
                    <span>Don't have any account? </span><Link className='text-primary' to='/register'> Register please</Link>
                </div>
                <div class="divider">OR</div>
                <button className='btn btn-primary lg:w-[344px] mx-12 lg:mx-24 my-4'
                    onClick={() => signInWithGoogle()}><img className='w-12 h-12' src={google} alt="" /> LogIN With google</button>
            </div>
        </div>
    );
};

export default Login;