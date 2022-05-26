import React from 'react';
import banner from '../Assets/images/banner.jpg'
import banner1 from '../Assets/images/banner1.jpg'
import banner2 from '../Assets/images/banner2.jpg'
const Experts = () => {
    const experts = [
        {
            "name": "Jondish mia",
            "job": "Parts Designer",
            "experience": "28 years",
            "image": banner,
        },
        {
            "name": "Jondish mia",
            "job": "Parts Designer",
            'experience': "33 years",
            "image": banner2,
        },
        {
            "name": "Jondish mia",
            "job": "Parts Designer",
            "experience": "35 years",
            "image": banner1,
        }
    ]
    return (
        <div className='my-24'>
            <h1 className='text-4xl text-primary uppercase text-center font-mono font-bold my-12'>Our Experts</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    experts.map((expert, index) =>
                        <div key={index} class="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={expert.image} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">Name: {expert.name}</h2>
                                <p>Experience: {expert.experience}</p>
                                <p>Job Tittle: {expert.job}</p>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Experts;