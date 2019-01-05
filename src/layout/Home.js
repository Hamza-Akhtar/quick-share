import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    btnClick = () => {
        console.log('click');
        this.props.history.push('/create-workout');
    }

    render() {
        return (
            <div className="homepage">
                <div className="homeImg"> </div>
                <h1 className="center">Welcome to QuickShare</h1>
                <p className="center homeP">Create & Share Workouts with anyone on the Web within Seconds!</p>
                <button className="center btn homeBtn" onClick={ this.btnClick }>Get Started</button>
            </div>
        )
    }
}

export default Home;