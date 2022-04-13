import React from 'react';
import Faq from '../../Faq/Faq';
import Glasses from '../Glasses/Glasses';
import TopBanner from '../TopBanner/TopBanner';
import './Home.css'

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Glasses></Glasses>
      <Faq></Faq>

        </div>
    );
};

export default Home;