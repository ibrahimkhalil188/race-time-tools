import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams()
    /*  const url = `http://localhost:5000/order/${id}` */

    return (
        <div>
            This is payment$ {id}
        </div>
    );
};

export default Payment;