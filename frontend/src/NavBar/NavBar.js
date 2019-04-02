import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () =>  
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Elevate Ask
      </Link>
    </nav>;

export default NavBar;