import React, { Component } from "react";
import { Link } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";


class Navbar extends Component {

  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      var elem = document.querySelectorAll('.sidenav');
      // eslint-disable-next-line
      var instance = M.Sidenav.init(elem, {
        edge: "right",
        inDuration: 250,
        height: 20
    });
  })
}

  render() {
  return (
    <div>
      <nav className="nav wrapper black darken-4">
        <div className="container ">
          <Link to='/' className="brand-logo">QuickShare</Link>
          <Link to="#" className="sidenav-trigger right" data-target="mobile-links">
            <i className="material-icons">menu</i></Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to='/create-workout'>New Workout</Link></li>
            <li><Link to='/recent-workouts'>Recent Workouts</Link></li>
            {/* <li><Link to='/about'>About</Link></li>
            <li><Link to='/help'>Help</Link></li> */}
          </ul>
          <ul className="sidenav" id="mobile-links">
      <li><Link to='/create-workout'>New Workout</Link></li>
      <li><Link to='/recent-workouts'>Recent Workouts</Link></li>
    </ul>
        </div>
      </nav>
</div>

  );
}

}



export default Navbar;