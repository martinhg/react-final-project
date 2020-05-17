import React from 'react';
import Logo from '../../assets/logo.svg';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="nav-container">
            <section className="nav-container__logo">
                <img className="nav-container__logo--img" src= { Logo } alt="Logo"/>
            </section>
            <section className="nav-container__search">
                <i class="fas fa-search nav-container__search--icon"></i>
            </section>
        </nav>
    );
}

export default Navbar;