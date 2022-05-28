import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3dQQFSCgLXqw7Ei87Y4WgyookdfFtpn7g2Uqh63r5ridy8vVyOPFe8QhRs2bbeJFFLR24Lgsc4xwaSXHh1wTez00ldl63QfE')

const Payment = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const url = `https://race-time-tools.herokuapp.com/order/${id}`
    const { data: orderItem, isLoading } = useQuery(["orderItem", id], () => fetch(url).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='my-6'>
                <div class="card w-1/2 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Hi {user?.displayName} !</h2>
                        <p>YOur order item is <span className='text-success
                         text-xl'>{orderItem?.productName} !</span></p>
                        <p>You have to pay <span className='text-xl text-success'> ${orderItem?.price}</span> for {orderItem?.quantity} pice</p>
                    </div>
                </div>
            </div>
            <div class="card w-1/2 bg-base-100 shadow-xl">
                <div className='card-body'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>

            </div>
        </div>
    );
};

export default Payment;