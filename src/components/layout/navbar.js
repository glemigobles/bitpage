import React from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/imgs/logo.png'
import { Link } from 'react-router-dom';

const navbar = (props) => {

    return (
        <div className="navbar partial space-btw padding" >
            <div className="partial-50 center-v">
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="partial-50 center-v right padding">
                <div className="toggleMenu" onClick={props.toggleMenu}><h2><FontAwesomeIcon icon="bars" /></h2></div>
            </div>
        </div >
    );
};

export default navbar;