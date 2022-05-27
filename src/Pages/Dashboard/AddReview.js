import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const [starCount, setStarCount] = useState(0)
    const [review, setReview] = useState(" ")
    const [rating, setRating] = useState(1)
    const name = user?.displayName
    const image = user?.photoURL
    const handleSubmit = e => {
        e.preventDefault()
        const data = { review, rating, name, image }
        console.log(data)
    }
    return (
        <div>
            <div class=" card-body w-96 shadow-xl rounded-xl border-4">
                <form onSubmit={handleSubmit}>
                    <h2 class="card-title">Review</h2>
                    <textarea class="textarea w-full textarea-primary" placeholder="Bio" onChange={e => setReview(e.target.value)}></textarea>
                    <div className='my-4 w-full'>
                        <label class="label">
                            <span class="label-text">Your Ratings</span>
                        </label>
                        <label class="input-group">
                            <span className='text-2xl btn btn-primary ' disabled={starCount < 2} onClick={() => {
                                setStarCount(starCount - 1)
                            }}><AiOutlineMinus /></span>

                            <input class=" px-6 w-32" onChange={e => setRating(e.target.value)} value={starCount} />

                            <span className='text-2xl btn btn-primary' disabled={starCount > 4} onClick={() => {
                                setStarCount(starCount + 1)
                            }}><AiOutlinePlus /></span>

                        </label>
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