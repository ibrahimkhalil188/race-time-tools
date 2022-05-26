import React from 'react';
import { Fade } from 'react-reveal';
import Banner2 from '../Assets/images/chain.jpg'
import Banner1 from '../Assets/images/giar.jpg'
const HeroSection = () => {
    return (
        <div className="lg:flex h-screen">
            <div className="bg-[#565656] flex-auto lg:w-64 ">
                <div className='p-6 lg:mx-24 lg:my-32'>
                    <h1 className='text-white text-3xl lg:text-6xl uppercase font-mono'>Best bicycle parts manufacturer</h1>
                    <p className='my-6 text-white lg:text-lg'>
                        Do You Need Custom BiCycle ?<br></br> Order Your Parts Here !
                        Custom Built Rides
                        You Can't Find Any Where Else
                    </p>
                    <Fade top>
                        <button className='btn btn-primary '>Get started</button>
                    </Fade>
                </div>
            </div>
            <div className="flex-auto bg-red-500  lg:w-32 ">
                <Fade right>
                    <div className='flex items-center lg:mt-32'>
                        <img className='m-6 lg:ml-[-80px] w-32 lg:w-96 h-32 lg:h-96 rounded-lg' src={Banner1} alt="" />
                        <img className='w-24 lg:w-56 h-32 lg:h-56 ml-4 rounded-lg' src={Banner2} alt="" />
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default HeroSection;