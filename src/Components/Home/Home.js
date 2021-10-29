import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import NextTrip from '../NextTrip/NextTrip';
import TravelSites from '../TravelSites/TravelSites';

const Home = () => {
    return (
        <div>
            <Banner />
            <TravelSites />
            <NextTrip />
        </div>
    );
};

export default Home;