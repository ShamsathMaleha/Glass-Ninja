import React from 'react';
import Faq from '../../Faq/Faq';
import ExclusiveGlass from '../ExclusiveGlass/ExclusiveGlass';
import Glasses from '../Glasses/Glasses';
import TopBanner from '../TopBanner/TopBanner';
import './Home.css'

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Glasses></Glasses>
            <ExclusiveGlass></ExclusiveGlass>
      <Faq></Faq>

        </div>
    );
};

export default Home;