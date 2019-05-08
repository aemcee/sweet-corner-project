import React from 'react';
import './header.scss';
import Nav from '../nav';
import headerPic from '../../assets/images/header.png';
import logoPic from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div>
            <div className="header-pic">
                <img src={headerPic}/>
            </div>
            <div>
                <Nav></Nav>
            </div> 
            <div className="center">
                <img src={logoPic}/>
            </div>
            {/* <h1 className = "center">This is the header</h1> */}
            <div className="fancy center">
                <h2>We deliver cupcakes for the important events in your life!</h2>
            </div>
            <div className="header-bar">

            </div>
        </div>
    )
}

export default Header;