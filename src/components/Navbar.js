import React from 'react';
import { NavLink } from 'react-router-dom';
import '../containers/App.css'

const Navbar = () =>
  <div className="navbar navbar-default">
    <NavLink className="navlink" activeClassName="activeNavlink" exact to='/'>Restaurant List</NavLink>
    <NavLink className="navlink" activeClassName="activeNavlink" exact to='/recommendation'>Quick Pick</NavLink>
  </div>

export default Navbar
