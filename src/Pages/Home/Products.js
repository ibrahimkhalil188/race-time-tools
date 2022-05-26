import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';

const Products = () => {
    const { data: products, isLoading } = useQuery("products", () => fetch("http://localhost:5000/products").then(res => res.json()))

    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-4xl text-primary uppercase text-center font-mono font-bold my-12'>products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12'>
                {
                    products?.map(singleProduct => <Product item={singleProduct} key={singleProduct._id}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;