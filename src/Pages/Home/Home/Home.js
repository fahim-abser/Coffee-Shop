import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Coffee Shop</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            
        </div>
    );
};

export default Home;