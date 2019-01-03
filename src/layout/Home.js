import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
    <div className="homepage">
        <div className="homeImg"> </div>
           <h1 className="center">Welcome to QuickShare</h1> 
           <p className="center homeP">Quickly Share Workouts with Anyone on the Web within Seconds!</p> 
           <button className="center btn homeBtn">Get Started</button>
    </div>
    );
}

export default Home;