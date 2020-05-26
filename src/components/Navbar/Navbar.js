import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './Navbar.scss';
import SearchBox from '../SearchBox/SearchBox';

const Navbar = () => {
    const [show, setShow] = useState(false);
    
    const showSearchBox = () => {
        if (show) {
            setShow(false);
        } else {
            setShow(true)
        }
    }
    return (
        <nav className="nav-container">
            <div className="nav-container__nav">
                <section className="nav-container__nav__logo">
                    <Link to="/">
                        <img className="nav-container__nav__logo--img" src= { Logo } alt="Logo"/>
                    </Link>
                </section>
                <section className="nav-container__nav__search">
                    <button className="nav-container__nav__search--btn" onClick={() => {
                    showSearchBox()
                }}><i className="fas fa-search"></i></button>
                </section>
            </div>
            {show && 
                <div className="nav-container__box">
                    <SearchBox></SearchBox>
                </div>
            }
        </nav>
    );
}

export default Navbar;