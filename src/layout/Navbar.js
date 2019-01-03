import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className="nav wrapper black darken-4">
        <div className="container">
          <Link to='/' className="brand-logo">QuickShare</Link>
          <ul className="right">
            <li><Link to='/create-workout'>New Workout</Link></li>
            <li><Link to='/recent-workouts'>Recent Workouts</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/help'>Help</Link></li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;