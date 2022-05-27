import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const [error, setError] = useState(" ")
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        if (!stripe || !elements) {

            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message || ' ')
        } else {
            setError(" ")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement className='p-4'
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn-primary btn-sm mx-12 text-xl' type="submit" disabled={!stripe}>
                Pay
            </button>
            {error && <span>{error}</span>}
        </form>
    );
};

export default CheckoutForm;