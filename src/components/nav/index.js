
import './nav.scss';
import {Link} from 'react-router-dom';
import React from 'react';

const Nav = props => {

    return (
        <ul className="main-nav">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    )
}

export default Nav;