import React from 'react';

const ReviewCard = ({ singleReview }) => {
    const { name, image, review } = singleReview
    return (
        <div className='hover:shadow-2xl hover:bg-white'>
            <div className="card bg-base-100 shadow-xl border-2">
                <div className="avatar place-content-center mt-6">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt='' />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;