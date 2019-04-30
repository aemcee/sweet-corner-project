import React from 'react';
import '../assets/css/app.scss';
import {Route} from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Header from './header';
import Home from './home';
import Services from './services';

const App = () => (
    <div className = "app">
        <div className = "container">
            <Header/>
                <Route path = "/about" component = {About} />
                <Route path = "/contact" component = {Contact} />
                <Route exact path = "/" component = {Home} />
                <Route path = "/services" component = {Services} />
            <Footer/>
        </div>
        {/* <h1>Sweet Corner</h1> */}
        {/* <div className="app">
            <img src={logo} className="logo rotate"/>
            <h1>Welcome To React</h1>
        </div> */}
    </div>
);

export default App;
