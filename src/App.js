import React, { Component } from 'react';

import Navbar from './layout/Navbar'
import Home from './layout/Home';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import RecentWorkouts from './components/RecentWorkouts';
import WorkoutDetails from './layout/WorkoutDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateWorkout from './components/CreateWorkout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/recent-workouts' component={RecentWorkouts} />
            <Route path='/workout/:id' component={WorkoutDetails} />
            <Route path='/login' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create-workout' component={CreateWorkout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
