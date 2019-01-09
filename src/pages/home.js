import React from 'react';
import reactlogo from '../assets/imgs/reactlogo.svg';
import reduxlogo from '../assets/imgs/redux_white.svg';
import relicon from '../assets/imgs/low-signal.svg';
import engicon from '../assets/imgs/digital-marketing.svg';
import fasticon from '../assets/imgs/website-speed.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import './home.scss';
import Sectionhead from '../components/partials/sectionhead';
import Card from '../components/partials/card';
import Button from '../components/partials/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Backbox from '../components/partials/backbox';

const home = (props) => {

    return (
        <div className="home partial column" >
            <div className='wrapper partial column'>
                <ScrollAnimation animateIn='zoomIn' duration={1} animateOnce={true}>
                    <img src={reactlogo} className="App-logo" alt="reactlogo" />
                    <h1>{props.data.lang.home.title}</h1>
                    <h3>{props.data.lang.home.subtitle}</h3>
                    <div className="partial wrap center-h margin-btm">
                        <AnchorLink href='#section-1' ><Button >{props.data.lang.home.butt1}</Button></AnchorLink>
                        <a href="https://github.com/glemigobles/bitpage" target="_blank" rel="noopener noreferrer" name="github-bitfinity-pwa"><Button color="light-invert">{props.data.lang.home.butt2} <FontAwesomeIcon icon={["fab", "github"]} /></Button></a>
                    </div>
                </ScrollAnimation>
            </div>
            <Backbox addClass="partial column center-v">
                <div className=" section-1 partial start-h wrapper column" id="section-1">
                    <Sectionhead subtitleAnimation="fadeInLeft" lineAnimation="fadeInLeft"
                        animateIn={'fadeInUp'} animate={true} animateOnce={true} title={props.data.lang.home.section1title}
                        subtitle={props.data.lang.home.section1subtitle}></Sectionhead>
                    <div className='partial wrap center-v center-h margin-top margin-btm h-100'>
                        <Card title={'Reilable'} icon={relicon} animateOnce={true} addClass="h100">
                            <p>{props.data.lang.home.section1text1}</p>
                            <p>{props.data.lang.home.section1text11}</p>
                        </Card>
                        <Card title={'Fast'} icon={fasticon} animateOnce={true} addClass="h100">
                            <p>{props.data.lang.home.section1text2}</p>
                            <p>{props.data.lang.home.section1text22}</p>
                        </Card>
                        <Card title={'Engaging'} icon={engicon} animateOnce={true} addClass="h100">
                            <p>{props.data.lang.home.section1text33}</p>
                        </Card>
                        <p>{props.data.lang.home.section1summary}</p>&nbsp;
                        <b><a href="https://developers.google.com/web/progressive-web-apps/" target="_blank" rel="noopener noreferrer" name="about-pwa">{props.data.lang.home.section1summary1}</a></b>
                    </div>
                </div>

            </Backbox>
            <Backbox color="dark" addClass="partial column center-v">
                <div className="section-2 partial start-v wrapper column" id="section-2">
                    <Sectionhead subtitleAnimation="fadeInLeft" lineAnimation="fadeInLeft"
                        animateIn={'fadeInUp'} animate={true} animateOnce={true} title={props.data.lang.home.section2title} subtitle={props.data.lang.home.section2subtitle}></Sectionhead>
                    <div className='partial column center-v center-h margin-top margin-btm'>
                        <br></br>
                        <br></br>
                        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                            <img src={reduxlogo} alt="reduxlogo" />
                            <h2>React Redux</h2>
                            <p>{props.data.lang.home.section2feature1}</p>
                            <div className="icons flex center-h">
                                <a href="https://github.com/reduxjs/redux" target="_blank" rel="noopener noreferrer" name="redux-github"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                                <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer" name="redux-homepage"><FontAwesomeIcon icon="home" /></a>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                            <h2>React Router</h2>
                            <p>{props.data.lang.home.section2feature2}</p>
                            <div className="icons flex center-h">
                                <a href="https://github.com/ReactTraining/react-router" target="_blank" rel="noopener noreferrer" name="router-github"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                                <a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer" name="router-homepage"><FontAwesomeIcon icon="home" /></a>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                            <h2>React Animate on Scroll</h2>
                            <p>{props.data.lang.home.section2feature3}</p>
                            <div className="icons flex center-h">
                                <a href="https://github.com/dbramwell/react-animate-on-scroll" target="_blank" rel="noopener noreferrer" name="raos-github"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                                <a href="https://dbramwell.github.io/react-animate-on-scroll/" target="_blank" rel="noopener noreferrer" name="raos-homepage"><FontAwesomeIcon icon="home" /></a>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                            <h2>React Transition Group</h2>
                            <p>{props.data.lang.home.section2feature4}</p>
                            <div className="icons flex center-h">
                                <a href="https://github.com/reactjs/react-transition-group" target="_blank" rel="noopener noreferrer" name="transitiongroup-github"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                                <a href="https://reactcommunity.org/react-transition-group/" target="_blank" rel="noopener noreferrer" name="transitiongroup-homepage"><FontAwesomeIcon icon="home" /></a>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                            <h2>Font Awesome</h2>
                            <p>{props.data.lang.home.section2feature5}</p>
                            <div className="icons flex center-h">
                                <a href="https://github.com/FortAwesome/Font-Awesome" target="_blank" rel="noopener noreferrer" name="fontawesome-github"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                                <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer" name="fontawesome-homepage"><FontAwesomeIcon icon="home" /></a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </Backbox>
        </div >
    );
};

export default home;