import React from 'react';
import './menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const menu = (props) => {

    const cssClassesMenu = [
        'menu partial column center-h center-v',
        props.show === 'entered' ? 'menuopened' : 'menuclosed'
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
        <div className={cssClassesMenu.join(' ')} >
            <div className={cssClassesCorners.join(' ')}>
                <h1>menu</h1>
                <div onClick={props.toggleMenu} className="exitlink"><h1><FontAwesomeIcon icon={["far", "window-close"]} /></h1></div>
            </div>
            <ul className={cssClassesList.join(' ')}>
                <li><h2><Link to="/" onClick={props.toggleMenu}>{props.langs.menu.link1}</Link></h2></li>
                <li><h2><Link to="/documentation" onClick={props.toggleMenu}>{props.langs.menu.link2}</Link></h2></li>
                {/* <li><h2><Link to="/contact" onClick={props.toggleMenu}>{props.langs.menu.link3}</Link></h2></li> */}
            </ul>
            <div className={cssClassesCorners.join(' ')}>
                <div className="partial center-h center-v">
                    {/* <div className="langlink margin-r" onClick={() => props.toggleLang(0)}><h2 >EN</h2></div>
                    <div className="langlink margin-r" onClick={() => props.toggleLang(1)}><h2>PL</h2></div> */}
                    <h2><a className="margin-r" href="https://github.com/glemigobles/bitpage" target="_blank" rel="noopener noreferrer" name="github-bitfinity-pwa"><FontAwesomeIcon icon={["fab", "github"]} /></a></h2>
                    <h2><a href="https://bitfinity.eu" target="_blank" rel="noopener noreferrer" name="homepage-bitfinity"><FontAwesomeIcon icon="home" /></a></h2>
                </div>
            </div >
        </div >

    );
};

export default menu;