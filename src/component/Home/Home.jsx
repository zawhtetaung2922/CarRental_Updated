import React from 'react';
import Navbar from './Navbar';
import HeroBanner from './HeroBanner';
import PopularCars from './PopularCars';
import OurServices from './OurServices';
import PeopleChoice from './PeopleChoice';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroBanner />
            <PopularCars />
            <OurServices />
            <PeopleChoice />
            <Footer />
        </div>
    );
}

export default Home;