import React from "react";

import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';


const NavBar = ()=>{

    return <>
        <nav className="navbar navbar-nav-color navbar-expand-lg">
                    <div className="container">
                    <a className="navbar-brand logo-navbar-zahir" href="#Home"><img src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars nav-bar-togle-icon"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                        <NavLink className="nav-link navbar-nav-color" href="#Home">Home</NavLink>
                        <NavLink className="nav-link navbar-nav-color" to="#AboutUs">About Us </NavLink>
                       
                        <NavLink className="nav-link navbar-nav-color" to="#Projects">Projects</NavLink>
                        
                        <NavLink className="nav-link" to="#Contact">Contact</NavLink>
                        </div>
                    </div>
                </div>
        </nav>
    </>
}

export default NavBar;