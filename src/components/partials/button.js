import React from 'react';
import './button.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Standardoptions from './standardoptions';


const button = (props) => {
    //**standardoptions*
    let options = Standardoptions('button', props, ['dark', 'light-invert', 'dark-invert']);
    //**additonal options */
    //**component pattern */
    let element =
        <div className={options.cssClassesMenu} onClick={props.onClick}>
            <p>{props.children}</p>
        </div >;
    //**output component with optional classes and animation*/
    const Element = !options.animate ?
        <div className={props.addClass}>
            {element}
        </div>
        :
        <ScrollAnimation animateIn={options.animateIn} animateOut={options.animateOut} duration={options.animationDuration} offset={options.animationOffset} delay={options.animationDelay} animateOnce={options.animateOnce} className={props.addClass}>
            {element}
        </ScrollAnimation>
    //**return component */
    return (
        Element
    );
};

export default button;