import React from 'react';
import { NavLink } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-0">
        <div className="container-fluid">
            <NavLink className="h1" to="/"><FaReact /></NavLink>
            <button className="h3 p-0 border-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><GiHamburgerMenu />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav justify-content-end w-100">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/service">Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header
