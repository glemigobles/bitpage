import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const footer = (props) => {
    const nav = document.getElementsByClassName('navbar');
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            nav[0].classList.add('scrolled');
        } else {
            nav[0].classList.remove('scrolled');
        }
    });

    return (
        <div className='footer partial column center-h padding' >
            <p>React Bitfinity PWA v 0.4</p>
            <h3 className="margin-top">
                <a className="margin-r" href="https://github.com/glemigobles/bitpage" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                <a href="https://bitfinity.eu" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="home" /></a>
            </h3>


        </div >
    );
};

export default footer;