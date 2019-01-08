import React from 'react';
import './textarea.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Standardoptions from './standardoptions';

const textarea = (props) => {
    //**standardoptions*
    let options = Standardoptions('textarea', props, ['light', 'dark']);
    //**additonal options */
    let label;
    let value;
    let name;
    let form;
    let rows = 5;
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
    if (props.rows) {
        rows = props.rows;
    }
    //**component pattern */
    let element =
        <div className={options.cssClassesMenu}>
            {label}
            <textarea rows={rows} name={name} form={form} value={value}>
            </textarea >
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

export default textarea;