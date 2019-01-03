import React from 'react';
import './sectionhead.scss';
import ScrollAnimation from 'react-animate-on-scroll';


const sectionhead = (props) => {
    let animateOnce = false;
    if (props.animateOnce) {
        animateOnce = true;
    }
    return (
        <div className="sectionhead" >
            <ScrollAnimation animateIn='fadeInUp' duration={1} offset={100} animateOnce={animateOnce}>
                <h2>{props.title}</h2>
                <ScrollAnimation animateIn='fadeInLeft' duration={1} offset={50} animateOnce={animateOnce}>
                    <div className="line"></div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInLeft' duration={1} delay={300} offset={50} animateOnce={animateOnce}>
                    <h3>{props.subtitle}</h3>
                </ScrollAnimation>
            </ScrollAnimation>
        </div >
    );
};

export default sectionhead;