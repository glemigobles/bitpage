import React from 'react';
import './card.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Standardoptions from './standardoptions';


const card = (props) => {
    //**standardoptions*
    let options = Standardoptions('card', props, []);
    //**additonal options */
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
    //**component pattern */
    let element =
        <div className={options.cssClassesMenu} >
            <h3>{props.title}</h3>
            {titleline}
            {icon}
            {iconline}
            {props.children}
        </div >
    //**output component with optional classes and animation*/
    const Element = !options.animate ?
        <div className={props.addClass}>
            {element}
        </div>
        :
        <ScrollAnimation animateIn={options.animateIn} animateOut={options.animateOut} duration={options.animationDuration} offset={options.animationOffset} delay={options.animationDelay} animateOnce={options.animateOnce}  className={props.addClass}>
            {element}
        </ScrollAnimation>
    //**return component */
    return (
        Element
    );
};

export default card;
