import React from 'react';
import './sectionhead.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Standardoptions from './standardoptions';


const sectionhead = (props) => {
    //**standardoptions*
    let options = Standardoptions('sectionhead', props, []);
    //**additonal options */
    let lineAnimation = options.animateIn;
    let subtitleAnimation = options.animateIn;
    if (props.lineAnimation) {
        lineAnimation = props.lineAnimation;
    }
    if (props.subtitleAnimation) {
        subtitleAnimation = props.subtitleAnimation;
    }
    //**component pattern */
    //**output component with optional classes and animation*/
    const Element = !options.animate ?
        <div className={options.cssClassesMenu + ' ' + props.addClass}>
            <h2>{props.title}</h2>
            <div className="line"></div>
            <h3>{props.subtitle}</h3>
        </div >
        :
        <div className={options.cssClassesMenu + ' ' + props.addClass}>
            <ScrollAnimation animateIn={options.animateIn} animateOut={options.animateOut} duration={options.animationDuration} offset={options.animationOffset} delay={options.animationDelay} animateOnce={options.animateOnce} className={props.addClass}>
                <h2>{props.title}</h2>
                <ScrollAnimation animateIn={lineAnimation} animateOut={options.animateOut} duration={options.animationDuration} offset={options.animationOffset} delay={options.animationDelay} animateOnce={options.animateOnce} className={props.addClass}>
                    <div className="line"></div>
                </ScrollAnimation>
                <ScrollAnimation animateIn={subtitleAnimation} animateOut={options.animateOut} duration={options.animationDuration} offset={options.animationOffset} delay={options.animationDelay + 300} animateOnce={options.animateOnce} className={props.addClass}>
                    <h3>{props.subtitle}</h3>
                </ScrollAnimation>
            </ScrollAnimation>
        </div >
    //**return component */
    return (
        Element
    );
};

export default sectionhead;