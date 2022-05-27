import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const ManageOrder = () => {
    const { data: allorder, refetch } = useQuery("allorder", () => fetch("http://localhost:5000/allorder").then(res => res.json()))


    const deleteOrder = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        }).then(res => res.json())
            .then(data => {
                toast.success("Order deleted successfully")
                refetch()
            })
    }

    return (
        <div>
            <div>
                <div >
                    <table class="table table-zebra w-full">

                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Role</th>
                                <th>Delete User</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allorder?.map((singleOrder, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{singleOrder?.productName}</td>
                                    <td>{singleOrder?.quantity}</td>
                                    <td className={`${singleOrder?.status === "unpaid" ? "text-orange-600" : "text-success-600"}`}>{singleOrder?.status}</td>

                                    <td>
                                        <button className='btn btn-warning btn-xs' onClick={() => deleteOrder(singleOrder?._id)}>Delete</button>
                                    </td>

                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;