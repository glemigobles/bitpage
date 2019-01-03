import React from 'react';
import logo from '../logo.svg';
import reduxlogo from '../assets/imgs/redux_white.svg';
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
                <ScrollAnimation animateIn='zoomIn' duration={2} animateOnce={true}>
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
            <div className="section-2 partial column">
                <div className="partial wrapper column">
                    <Sectionhead animateOnce={true} title={props.data.lang.home.section2title} subtitle={props.data.lang.home.section2subtitle}></Sectionhead>
                    <div className='partial column center-v center-h margin-top margin-btm'>
                        <br></br>
                        <br></br>
                        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                            <img src={reduxlogo} alt="reduxlogo" />
                            <h2>React Redux</h2>
                            <p>{props.data.lang.home.section2feature1}</p>
                            <div className="icons flex center-h">
                                <a href="" target="_blank" rel="noopener"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                                <a href="" target="_blank" rel="noopener"><FontAwesomeIcon icon="home" /></a>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                            <h2>React Router</h2>
                            <p>{props.data.lang.home.section2feature2}</p>
                            <div className="icons flex center-h">
                                <a href="" target="_blank" rel="noopener"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                                <a href="" target="_blank" rel="noopener"><FontAwesomeIcon icon="home" /></a>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                            <h2>React Animate on Scroll</h2>
                            <p>{props.data.lang.home.section2feature3}</p>
                            <div className="icons flex center-h">
                                <a href="" target="_blank" rel="noopener"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                                <a href="" target="_blank" rel="noopener"><FontAwesomeIcon icon="home" /></a>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                            <h2>React Transition Group</h2>
                            <p>{props.data.lang.home.section2feature4}</p>
                            <div className="icons flex center-h">
                                <a href="" target="_blank" rel="noopener"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                                <a href="" target="_blank" rel="noopener"><FontAwesomeIcon icon="home" /></a>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                            <h2>Font Awesome</h2>
                            <p>{props.data.lang.home.section2feature5}</p>
                            <div className="icons flex center-h">
                                <a href="" target="_blank" rel="noopener"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                                <a href="" target="_blank" rel="noopener"><FontAwesomeIcon icon="home" /></a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default home;