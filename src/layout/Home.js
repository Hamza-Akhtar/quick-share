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
                <p className="center homeP">Create & Share workouts with anyone on the web within seconds!</p>
                <button className="center btn homeBtn" onClick={ this.btnClick }>Get Started</button>
            </div>
        )
    }
}

export default Home;