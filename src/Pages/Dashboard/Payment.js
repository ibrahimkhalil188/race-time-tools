import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3dQQFSCgLXqw7Ei87Y4WgyookdfFtpn7g2Uqh63r5ridy8vVyOPFe8QhRs2bbeJFFLR24Lgsc4xwaSXHh1wTez00ldl63QfE')

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/order/${id}`
    const { data: orderItem, isLoading } = useQuery(["orderItem", id], () => fetch(url).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='my-6'>
                <div class="card w-1/2 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
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