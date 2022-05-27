import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const [review, setReview] = useState(" ")
    const [rating, setRating] = useState(0)
    const name = user?.displayName
    const image = user?.photoURL || "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"

    const handleSubmit = e => {
        e.preventDefault()
        const data = { review, rating, name, image }
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Thanks for give us review")
                }
            })

    }
    return (
        <div>
            <div class=" card-body w-96 shadow-xl rounded-xl border-4">
                <form onSubmit={handleSubmit}>
                    <h2 class="card-title">Review</h2>
                    <textarea

                        class="textarea w-full textarea-primary" placeholder="Bio" onChange={e => setReview(e.target.value)} required></textarea>
                    <div className='my-4 w-full'>
                        <label class="label">
                            <span class="label-text">Your Ratings</span>
                        </label>
                        <>


                            <input
                                class="input input-primary" onChange={e => setRating(e.target.value)} type="number" min="1" max='5' required />



                        </>
                    </div>
                    <div >

                        <button class="btn btn-primary">Add review</button>
                    </div>
                </form>
            </div>

        </div>

    );
};

export default AddReview;