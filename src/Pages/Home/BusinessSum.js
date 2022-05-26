import React from 'react';
import { GiFlyingFlag } from 'react-icons/gi'
import { AiOutlineFundProjectionScreen, AiOutlineUsergroupAdd, AiFillLike } from 'react-icons/ai'
import background from '../Assets/images/footer.png'
const BusinessSum = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
            <h1 className='text-6xl text-primary text-center font-serif my-16'>Business Summary</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 place-items-center'>
                <div className='my-6 flex flex-col justify-center items-center'>
                    <GiFlyingFlag className='text-4xl  '></GiFlyingFlag>
                    <h1 className='text-6xl text-secondary my-4'>74+</h1>
                    <h3 className='text-secondary font-mono text-xl font-bold'>Country</h3>
                </div>
                <div className='my-6 flex flex-col justify-center items-center'>
                    <AiOutlineFundProjectionScreen className='text-4xl  '></AiOutlineFundProjectionScreen>
                    <h1 className='text-6xl text-secondary my-4'>454+</h1>
                    <h3 className='text-secondary font-mono text-xl font-bold'>Complete projects</h3>
                </div>
                <div className='my-6 flex flex-col justify-center items-center'>
                    <AiOutlineUsergroupAdd className='text-4xl '></AiOutlineUsergroupAdd>
                    <h1 className='text-6xl text-secondary my-4'>394+</h1>
                    <h3 className='text-secondary font-mono text-xl font-bold'>Happy client</h3>
                </div>
                <div className='my-6 flex flex-col justify-center items-center'>
                    <AiFillLike className='text-4xl  '></AiFillLike>
                    <h1 className='text-6xl text-secondary my-4'>405+</h1>
                    <h3 className='text-secondary font-mono text-xl font-bold'>Feedback</h3>
                </div>
            </div>
            <div className='flex items-center justify-around pb-6'>
                <div>
                    <h1 className='text-5xl text-secondary p-4 font-bold'>Do you have any question?</h1>
                    <p className='text-lg font-bold px-4'>Don't hesitate to contact us</p>
                </div>
                <div>
                    <button className='btn btn-primary'>Contact us</button>
                </div>
            </div>
        </div>
    );
};

export default BusinessSum;