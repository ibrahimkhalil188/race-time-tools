import React from 'react';
import BusinessSum from './BusinessSum';
import Experts from './Experts';
import HeroSection from './HeroSection';
import Offers from './Offers';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Products></Products>
            <Offers></Offers>
            <BusinessSum></BusinessSum>
            <Experts></Experts>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;