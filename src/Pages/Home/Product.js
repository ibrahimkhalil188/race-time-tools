import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
    const { _id, name, image, price, description, minOrder, quantity
    } = item
    return (
        <div>
            <Fade left>
                <div className="card shadow-xl rounded-xl border-2">
                    <figure><img className='h-72' src={image} alt="" /></figure>
                    <div className="card-body border border-t-2">
                        <h2 className="card-title">{name}</h2>
                        <div className='text-lg font-serif'>
                            <p>Description: {description.slice(0, 50)}</p>
                            <p>Minimum Order: {minOrder}</p>
                            <p>Available: {quantity}</p>
                            <p>Price: ${price}</p>
                        </div>
                        <div className="card-actions justify-center">
                            <Link to={`/purchase/${_id}`} className="btn btn-primary">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Product;