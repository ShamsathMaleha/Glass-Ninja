
import React from 'react';
import './TopBaner.css'

const TopBanner = () => {
    return (
        <div className="feature-container">
            <div className="feature-description">
                <h1 className="feature-text">
                    Protect Your Eye.
                </h1>
                <p className="text-desc">
                    Make your eye safe. Your eyes define how do<br />
                    you feel and how is your day!
                </p>
                <h1 className="btn btn-outline-dark">Explore All</h1>
            </div>
            <div className="feature-img">
                <img className="feature-image" src="https://images.unsplash.com/photo-1625591340248-6d289000f96a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VuZ2xhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
            </div>
        </div>
    );
};

export default TopBanner;