import React from 'react';
import './button.scss';
import ScrollAnimation from 'react-animate-on-scroll';


const button = (props) => {
    let cssClassesMenu = 'button';
    if (props.type) {
        switch (props.type) {
            case 'dark':
                cssClassesMenu += ' dark';
                break;
            case 'light-invert':
                cssClassesMenu += ' light-invert';
                break;
            case 'dark-invert':
                cssClassesMenu += ' dark-invert';
                break;
            default:
        }
    }
    let animateOnce = false;
    if (props.animateOnce) {
        animateOnce = true;
    }
    return (
        <div className="flex">
            <ScrollAnimation animateIn='fadeIn' duration={0.5} offset={50} animateOnce={animateOnce}>
                <div className={cssClassesMenu} >
                    <p>{props.children}</p>
                </div >
            </ScrollAnimation>
        </div>
    );
};

export default button;