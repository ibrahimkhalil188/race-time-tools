import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const ManageProduct = () => {
    const { data: allItem, isLoading, refetch } = useQuery("allItem", () => fetch("http://localhost:5000/allproducts").then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(allItem)


    const deleteProduct = id => {

        fetch(`http://localhost:5000/allproducts/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Product deleted success")
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
                            <th>Product Name</th>
                            <th>price</th>
                            <th>Available Quantity</th>
                            <th>Status</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allItem?.map((product, index) => <tr key={index}>

                                <th>{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <button className='btn btn-warning btn-xs' onClick={() => deleteProduct(product?._id)}>Delete</button>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;