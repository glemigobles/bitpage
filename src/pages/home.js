import React from 'react';
import logo from '../logo.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import './home.scss';
import Sectionhead from '../components/partials/sectionhead';
import Card from '../components/partials/card';
import Button from '../components/partials/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const home = (props) => {

    return (
        <div className="home partial column" >
            <div className='wrapper partial column'>
                <ScrollAnimation animateIn='zoomIn' duration={2}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>{props.data.lang.home.title}</h1>
                    <h3>{props.data.lang.home.subtitle}</h3>
                    <div className="partial wrap center-h margin-btm">
                        <Button >{props.data.lang.home.butt1}</Button>
                        <Button type="light-invert">{props.data.lang.home.butt2} <FontAwesomeIcon icon={["fab", "github"]} /></Button>
                    </div>
                </ScrollAnimation>


            </div>
            <div className="section-1 box partial column">
                <div className="partial wrapper column">
                    <Sectionhead animateOnce={true} title={props.data.lang.home.section1title} subtitle={props.data.lang.home.section1subtitle}></Sectionhead>
                    <div className='partial column center-v center-h margin-top margin-btm'>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default home;