import React from 'react';

const About = () => {
    const user = [
        {
            "image": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
            "name": "shaown",
            "review": "nothing",
            "rating": "4.5"
        },
        {
            "image": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
            "name": "shaown",
            "review": "nothing",
            "rating": "4.5"
        },
        {
            "image": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
            "name": "shaown",
            "review": "nothing",
            "rating": "4.5"
        },
        {
            "image": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
            "name": "Tamim",
            "review": "nothing",
            "rating": "4.5"
        },
        {
            "image": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
            "name": "Adib",
            "review": "nothing",
            "rating": "4.5"
        },
        {
            "image": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
            "name": "Tamim",
            "review": "nothing",
            "rating": "4.5"
        }
    ]
    const searchquery = "shaown"
    return (
        <div>
            {
                user.map(u => console.log(u.name.includes(searchquery)))
            }
        </div>
    );
};

export default About;