import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Product successfully added")
                reset()
            })
    };

    return (
        <div className='h-[80vh]   m-12'>

            <form className='w-96 border-2 border-primary shadow-xl bg-base-200' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-2xl text-primary uppercase text-center  font-mono font-bold my-6'>products Info</h1>
                <div class="form-control w-full max-w-xs mx-auto">
                    <input
                        {...register("name")}
                        type="text" placeholder="Product Name" class="input input-bordered w-full max-w-xs my-2" required />
                </div>
                <div class="form-control w-full max-w-xs mx-auto">
                    <input
                        {...register("model")}
                        type="text" placeholder="Product Model" class="input input-bordered w-full max-w-xs my-2" required />
                </div>
                <div class="form-control w-full max-w-xs mx-auto">
                    <input
                        {...register("price")}
                        type="number" placeholder="Product Price" class="input input-bordered w-full max-w-xs my-2" required />
                </div>

                <div class="form-control w-full max-w-xs mx-auto">
                    <input
                        {...register("quantity")}
                        type="number" placeholder="Available Product Quantity" class="input input-bordered w-full max-w-xs my-2" required />
                </div>

                <div class="form-control w-full max-w-xs mx-auto my-2" required>
                    <input
                        {...register("minOrder")}
                        type="number" placeholder="Minimum Product Sell Quantity" class="input input-bordered w-full max-w-xs my-2" required />
                </div>

                <div class="form-control w-full max-w-xs mx-auto my-2" required>
                    <input
                        {...register("image")}
                        type="text" placeholder="Image url" class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full max-w-xs mx-auto my-4">

                    <textarea
                        {...register("description")}
                        class="textarea textarea-bordered " placeholder="Product Description!" required></textarea>

                </div>

                <div class="form-control w-full max-w-xs mx-auto">
                    <input className='btn btn-primary my-6' type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;