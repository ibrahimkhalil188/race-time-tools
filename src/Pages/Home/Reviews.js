import React from 'react';
import { useQuery } from 'react-query';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const { data: reviews } = useQuery("review", () => fetch("http://localhost:5000/reviews").then(res => res.json()))
    return (
        <div>
            <h1 className='text-4xl text-primary uppercase text-center font-serif font-bold my-12'>Reviews</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews?.slice(0, 6).map((singleReview, index) => <ReviewCard key={index} singleReview={singleReview}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;