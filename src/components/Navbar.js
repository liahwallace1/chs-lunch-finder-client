import React from 'react';
import { NavLink } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import '../containers/App.css'

const Navbar = () =>
  <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }} className="navbar navbar-default">
    <NavLink className="navlink" activeClassName="activeNavlink" exact to='/'>Restaurant List</NavLink>
    <NavLink className="navlink" activeClassName="activeNavlink" exact to='/recommendation'>Quick Pick</NavLink>
  </div>

export default Navbar
