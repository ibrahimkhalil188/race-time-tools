import React from 'react';
import Countdown from 'react-countdown';
import background from '../Assets/images/cycle.jpg'
import cycle from '../Assets/images/helmet.jpg'
const Offers = () => {

    return (
        <div className='my-12'>
            <div className="flex h-screen" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
                <div className="flex-auto">
                    <div className="hero min-h-screen">
                        <div className="hero-content flex-col lg:flex-row bg-white m-6 "><div>
                            <img src={cycle} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                        </div>
                            <div>
                                <h1 className="text-3xl text-primary font-bold uppercase my-4 text-center">Deal of This week !</h1>
                                <div className="card border bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title text-primary">RIDING HELMET</h2>
                                        <p>
                                            <div className='text-lg font-serif'>
                                                <span>Description:</span><small className=" leading-none"> One of the best metal helmet for bicycle rider. Three lear protection for rider.</small>
                                                <p>Model: D12</p>
                                                <p>Minimum Order:  10</p>
                                                <p>Available: 1000</p>
                                                <p>Price: <del className='text-primary  text-xl'>$1000</del>$800</p>
                                                <p className='text-2xl font-serif p-2  my-4 text-center rounded-lg text-white bg-secondary'>

                                                    Day left: <Countdown date={Date.now() + (1000 * 60 * 60 * 24 * 10)}> </Countdown></p>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                <button className="btn btn-primary w-full my-4">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className=" hero min-h-screen w-56 mr-6 shadow-xl">
                        <div className="p-6 items-center font-serif bg-white">
                            <h2 className="p-6 text-center text-2xl uppercase text-primary font-mono font-bold"> next week </h2>
                            <div>
                                <span>Description:</span><small className=" leading-none"> One of the best metal helmet for bicycle rider. Three lear protection for rider.</small>
                                <p className='mt-2'>Model: D12</p>
                                <p>Minimum Order:  10</p>
                                <p>Available: 1000</p>
                                <p>Price: <del className='text-primary  text-xl'>$1000</del>$800</p>
                                <div className='my-6'>
                                    <img src={cycle} alt="Shoes" className="rounded-xl" />
                                </div>
                            </div>
                            <button className='btn btn-primary justify-center my-2'>Learn More</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Offers;