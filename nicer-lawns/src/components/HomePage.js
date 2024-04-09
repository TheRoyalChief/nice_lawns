import React from 'react';
import Navigation from './Navigation';
import Countdown from './Countdown';
import '../App.css'; // Make sure this is correctly linked

const HomePage = () => {
    return (
        <div className="main-container">
            <div className="coming-soon-container">
                <h1>Coming Soon</h1>
                <Countdown targetDate="2024-05-11" />
                <p></p>
                <p>Contact Us: (816) 348-5790</p>
            </div>
        </div>
    );
};

export default HomePage;
