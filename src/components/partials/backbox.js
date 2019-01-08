import React from 'react';
import './backbox.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Standardoptions from './standardoptions';


const backbox = (props) => {
    //**standard options*/
    let options = Standardoptions('backbox', props, ['dark', 'light', 'outlined']);
    //**component pattern*/
    let element =
        <div className={options.cssClassesMenu} >
            {props.children}
        </div >;
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

export default backbox;