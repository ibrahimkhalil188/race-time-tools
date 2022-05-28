import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1>How will you improve the performance of a React Application?</h1>
                <p>There is so many option to improve performance of a react application. primarily i will focus 4-5 option.</p>
                <ul>
                    <li>
                        <h1>  Bundle file slipt:</h1>
                        <p> Usually when we build or file react give us a js bundle file if file size is quite have then i have to spite then file in many pice. then it will run faster then previous</p>
                    </li>
                    <li>
                        <h1>Large Rendering:</h1>
                        <p>When i have a data table with thousand of data or row . that time i can load only those row which row user see. i can use window tools for this loading system</p>
                    </li>
                    <li>
                        <h1>Useless rendering</h1>
                        <p>Rendering depend on dependency and prose so we have to be aware of useless props and dependency.</p>
                    </li>
                    <li>
                        <h1>Lazy loading // Download on demand</h1>
                        <p>When user need data that time will load data on my demand. other wise browser can crash for millions of data.</p>
                    </li>

                </ul>
            </div>
            <div>
                <h1>What are the different ways to manage a state in a React application</h1>
                <p>There are four way to manage state in react application</p>
                <ul>
                    <li>Local state</li>
                    <ul>Global state</ul>
                    <li>Url state</li>
                    <li>Server state</li>
                </ul>
            </div>
            <div>
                <h1> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p>
                    suppose i have an array name user and it's includes object with a name property . if i have to find any property by name i will write this code <br />

                    <span className='text-primary'>user.map(u => console.log(u.name.includes(searchquery)))</span>
                </p>
            </div>
            <div>
                <h1>What is a unit test?</h1>
                <p>
                    unit means a small part. In programing unit test means a process of testing code , component or function is working properly.
                </p>
                <h1> Why should write unit tests?</h1>
                <p>
                    Unit test is very important for those think.
                    <ul>
                        <li>Easy to debugging and find bugs</li>
                        <li>Reduce cost</li>
                        <li>Process become easier</li>
                        <li>easy to update and refactoring codes</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Blogs;