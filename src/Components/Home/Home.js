import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import NextTrip from '../NextTrip/NextTrip';
import TravelSites from '../TravelSites/TravelSites';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <TravelSites />
            <NextTrip />
            <WhyUs />
        </div>
    );
};

export default Home;