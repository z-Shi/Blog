import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Blog App</Link>
        <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className="nav-link active" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
                <NavLink className="nav-link" exact to="/blog">Blog</NavLink>
            </div>
        </div>
    </nav>
);

export default NavBar;
