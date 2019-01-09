import React from 'react';
import './sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Backbox from '../partials/backbox';

const sidebar = (props) => {

    // const nav = document.getElementsByClassName('sidebar');
    // window.addEventListener("scroll", () => {
    //     if (window.scrollY > 50) {
    //         nav[0].classList.add('scrolled-sidebar');
    //     } else {
    //         nav[0].classList.remove('scrolled-sidebar');
    //     }
    // });

    const cssClassesMenu = [
        'sidebar column',
        props.show === 'entered' ? 'sidebaropened' : 'sidebarclosed'
    ];
    const cssClassesCorners = [
        'partial space-btw padding',
        props.show === 'entered' ? 'cornersin' : 'cornersout'
    ];
    const cssClassesList = [
        '',
        props.show === 'entered' ? 'listin' : 'listout'
    ];

    return (
        <div className="sidebarwrap">
            <div className={cssClassesMenu.join(' ')} >
                {props.children}
            </div >
        </div>
    );
};

export default sidebar;