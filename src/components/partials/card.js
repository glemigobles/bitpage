import React from 'react';
import './card.scss';
import ScrollAnimation from 'react-animate-on-scroll';


const card = (props) => {
    let titleline;
    let icon;
    let iconline;
    if (props.title) {
        titleline = <div className="cardline"></div>;
    }
    if (props.icon) {
        icon = <img className="cardicon" src={props.icon} alt="icon" />;
        iconline = <div className="cardline"></div>;
    }
    let animateOnce = false;
    if (props.animateOnce) {
        animateOnce = true;
    }
    return (
        <ScrollAnimation className="h-100" animateIn='fadeIn' duration={0.5} offset={50} animateOnce={animateOnce}>
            <div className="card" >
                <h3>{props.title}</h3>
                {titleline}
                {icon}
                {iconline}
                {props.children}
            </div >
        </ScrollAnimation>
    );
};

export default card;
