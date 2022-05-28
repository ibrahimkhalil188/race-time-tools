import React from 'react';
const MyPortfolio = () => {
    return (
        <div className="lg:flex h-screen">
            <div className="bg-[#565656] flex-auto lg:w-64 ">
                <div className='p-6 lg:mx-24 lg:my-32'>
                    <h1 className='text-white text-3xl lg:text-6xl uppercase font-mono'> Ibrahim Khalil</h1>
                    <p className='my-6 text-white lg:text-lg'>
                        ibrahimkhalil.mine@gamil.com
                    </p>
                    <p className='my-6 text-white lg:text-2xl'>
                        Educational Background
                    </p>
                    <div class="overflow-x-auto">
                        <table class="table w-full">

                            <thead>
                                <tr>

                                    <th>Year</th>
                                    <th>Institute</th>
                                    <th>Degree</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>2017</td>
                                    <td>Qanderiya tayibial alia madrasha</td>
                                    <td>SSC</td>
                                </tr>

                                <tr>

                                    <td>2019</td>
                                    <td>BCIC College</td>
                                    <td>HSC</td>
                                </tr>

                                <tr>

                                    <td>2019-24</td>
                                    <td>Dhaka College</td>
                                    <td>psychology</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div className="flex-auto bg-red-500  lg:w-32 lg:px-16 lg:py-32">
                <h1 className='text-white  lg:text-3xl uppercase font-mono'> Technology i know</h1>
                <ul className='list-decimal text-xl text-white m-12'>
                    <li>HTML</li>
                    <li>Css</li>
                    <li>Tailwind</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                    <li>React js</li>
                    <li>Node js</li>
                    <li>Firebase</li>
                </ul>
            </div>
        </div>
    );
};

export default MyPortfolio;