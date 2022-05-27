import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import OrderCancelModel from './OrderCancelModel';
import { Link } from 'react-router-dom';

const MyOrder = () => {

    const [user] = useAuthState(auth);
    const email = user?.email
    const url = `http://localhost:5000/order?email=${email}`
    const { data: myorder, refetch } = useQuery("myorder", () => fetch(url).then(res => res.json()))
    return (
        <div>
            <div >
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Product Name</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myorder?.map((item, index) => <tr key={index}>

                                <th>{index + 1}</th>
                                <td>{item.productName}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td> <button class="btn btn-xs btn-warning"><Link to={`/dashboard/payment/${item._id}`}>Pay</Link></button></td>
                                <td>
                                    <label
                                        for="Order-Cancel-Modal" class="btn btn-xs btn-warning"
                                    >Cancel</label>
                                    <OrderCancelModel
                                        item={item}
                                        refetch={refetch}
                                    ></OrderCancelModel>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>)

};

export default MyOrder;