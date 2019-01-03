import React from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/imgs/logo.png'
import { Link } from 'react-router-dom';

const navbar = (props) => {
    const nav = document.getElementsByClassName('navbar');
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            nav[0].classList.add('scrolled');
        } else {
            nav[0].classList.remove('scrolled');
        }
    });

    return (
        <div className='navbar partial space-btw padding' >
            <div className="partial-50 center-v">
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="partial-50 center-v right">
                <div className="toggleMenu" onClick={props.toggleMenu}><h2><FontAwesomeIcon icon="bars" /></h2></div>
            </div>
        </div >
    );
};

export default navbar;