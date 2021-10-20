import React from 'react';
import AboutIntro from '../AboutIntro/AboutIntro';
import HeroSlider from '../HeroSlider/HeroSlider'
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSlider />
            <AboutIntro />
        </div>
    );
};

export default Home;