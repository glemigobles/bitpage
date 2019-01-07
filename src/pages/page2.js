import React from 'react';
import Sectionhead from '../components/partials/sectionhead';
import Card from '../components/partials/card';
import Button from '../components/partials/button';
import ScrollAnimation from 'react-animate-on-scroll';
import icon from '../assets/imgs/bitfi.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const page2 = (props) => {

    return (
        <div className="page2 wrapper partial start-v column" >
            <div className="box partial">
                <ScrollAnimation animateIn="fadeInUp" offset={50} animateOnce={true}>
                    <h1>Template Styling / Components</h1>
                </ScrollAnimation>
            </div>
            <Sectionhead animateOnce={true} title={'Animation'} subtitle={'<ScrollAnimation prop-options></ScrollAnimation>'}></Sectionhead>
            <div className='partial column center-v center-h margin-top margin-btm box'>
                <span className="margin-top margin-btm">
                    Animations are execiuted by external library:
                    <a href="https://github.com/dbramwell/react-animate-on-scroll" target="_blank" rel="noopener noreferrer" name="raos-github"><h2 className="margin-btm" > React Animate On Scroll </h2></a>
                    Read r-a-o-s <a href="https://github.com/dbramwell/react-animate-on-scroll" target="_blank" rel="noopener noreferrer" name="raos-github">documentation</a> to get info how to use it.
                    <br></br>
                    Besides default options given by r-a-o-s library, every component of that template has <b>'animateOnce'</b> option ( true or false, default - false) to perform element animation just once.
                </span>
            </div>
            <Sectionhead animateOnce={true} title={'Button element'} subtitle={'<Button type="optional">text content</Button>'}></Sectionhead>
            <div className='partial column center-v center-h margin-top margin-btm box'>
                <p className="margin-top">Default button</p>
                <Button>button</Button>
                <p className="margin-top">button type='light-invert'</p>
                <Button type={'light-invert'}>button</Button>
                <p className="margin-top">button type='dark'</p>
                <Button type={'dark'}>button</Button>
                <p className="margin-top">button type='dark-invert'</p>
                <Button type={'dark-invert'}>button</Button>
            </div>
            <Sectionhead animateOnce={true} title={'Card element'} subtitle={'<Card title="optional" icon="optional">text content</Card>'}></Sectionhead>
            <div className='partial column center-v center-h margin-top margin-btm box'>
                <p className="margin-top">Basic card element</p>
                <Card>
                    lorem ipsum sit dolar amend. lorem ipsum sit dolar amend. lorem ipsum sit dolar amend.
                    lorem ipsum sit dolar amend. lorem ipsum sit dolar amend. lorem ipsum sit dolar amend.
                    lorem ipsum sit dolar amend. lorem ipsum sit dolar amend. lorem ipsum sit dolar amend.
                    lorem ipsum sit dolar amend. lorem ipsum sit dolar amend. lorem ipsum sit dolar amend.
                </Card>
                <p className="margin-top">Card element with title</p>
                <Card title={'card title'}>
                    lorem ipsum sit dolar amend. lorem ipsum sit dolar amend. lorem ipsum sit dolar amend.
                    lorem ipsum sit dolar amend. lorem ipsum sit dolar amend. lorem ipsum sit dolar amend.
                    lorem ipsum sit dolar amend. lorem ipsum sit dolar amend. lorem ipsum sit dolar amend.
                    lorem ipsum sit dolar amend. lorem ipsum sit dolar amend. lorem ipsum sit dolar amend.
                </Card>
                <p className="margin-top">Card element with title and icon</p>
                <Card title={'card title'} icon={icon}>
                    lorem ipsum sit dolar amend. lorem ipsum sit dolar amend. lorem ipsum sit dolar amend.
                    lorem ipsum sit dolar amend. lorem ipsum sit dolar amend. lorem ipsum sit dolar amend.
                    lorem ipsum sit dolar amend. lorem ipsum sit dolar amend. lorem ipsum sit dolar amend.
                    lorem ipsum sit dolar amend. lorem ipsum sit dolar amend. lorem ipsum sit dolar amend.
                </Card>
            </div>
        </div >
    );
};

export default page2;