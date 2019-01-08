import React from 'react';
import './input.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Standardoptions from './standardoptions';

const input = (props) => {
    //**standardoptions*
    let options = Standardoptions('input', props, ['light', 'dark']);
    //**additonal options */
    let label;
    let value;
    let name;
    let form;
    if (props.form) {
        form = props.form;
    }
    if (props.label) {
        label = <p className="label">{props.label}</p>
    }
    if (props.name) {
        name = props.name;
    }
    if (props.value) {
        value = props.value;
    }
    //**component pattern */
    let element =
        <div className={options.cssClassesMenu}>
            {label}
            <input value={value} name={name} form={form}>
            </input >
        </div>
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

export default input;