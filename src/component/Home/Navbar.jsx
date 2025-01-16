import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();  // Access current route location

    const handleToggle = () => {
        setIsMobile(!isMobile);
    };

    const getLinkClassName = (path) => {
        return location.pathname === path ? 'active-link' : '';  // Add 'active-link' for the current path
    };

    return (
        <nav className="navbar">
            <Link className="logo" to="/">MZP Car Rental</Link>
            <div className="hamburger" onClick={handleToggle}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
                <li><Link className={getLinkClassName('/')} to="/">Home</Link></li>
                <li><Link className={getLinkClassName('/cars')} to="/cars">Cars</Link></li>
                <li><Link className={getLinkClassName('/services')} to="/services">Services</Link></li>
                <li><Link className={getLinkClassName('/contactUs')} to="/contactUs">Contact Us</Link></li>
                <li><Link className={getLinkClassName('/account')} to="/account">My Account</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
