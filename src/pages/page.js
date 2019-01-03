import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import logo from '../logo.svg';
import Sectionhead from '../components/partials/sectionhead';

const page = (props) => {

    return (
        <div className="page partial column" >
            <ScrollAnimation animateIn='zoomIn' duration={5}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>H1 {props.data.lang.header.title}</h1>
                    <h2>H2 {props.data.lang.header.title}</h2>
                    <h3>H3 {props.data.lang.header.title}</h3>
                    <p>
                        paragraph {props.data.lang.header.title}
                    </p>
                    <span>span {props.data.lang.header.title}</span>
                </header>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInLeft' duration={5}>
                <Sectionhead title={'section head'} subtitle={'section subtitle'} />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>H1 {props.data.lang.header.title}</h1>
                    <h2>H2 {props.data.lang.header.title}</h2>
                    <h3>H3 {props.data.lang.header.title}</h3>
                    <p>
                        paragraph {props.data.lang.header.title}
                    </p>
                    <span>span {props.data.lang.header.title}</span>
                </header>
            </ScrollAnimation>
            <ScrollAnimation animateIn='bounceIn' duration={5}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>H1 {props.data.lang.header.title}</h1>
                    <h2>H2 {props.data.lang.header.title}</h2>
                    <h3>H3 {props.data.lang.header.title}</h3>
                    <p>
                        paragraph {props.data.lang.header.title}
                    </p>
                    <span>span {props.data.lang.header.title}</span>
                </header>
            </ScrollAnimation>
        </div >
    );
};

export default page;