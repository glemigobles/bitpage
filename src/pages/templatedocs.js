import React from 'react';
import Sectionhead from '../components/partials/sectionhead';
import Card from '../components/partials/card';
import Button from '../components/partials/button';
import Textarea from '../components/partials/textarea';
import Backbox from '../components/partials/backbox';
import Input from '../components/partials/input';
import icon from '../assets/imgs/bitfi.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Sidebar from '../components/layout/sidebar';

const templatedocs = (props) => {

    return (
        <div className="page2 partial" >
            <Sidebar>
                <Backbox color="light" addClass="partial column">
                    <b>Instalation</b>
                    <Backbox color="outlined" addClass="partial column">
                        <AnchorLink href='#instalation' offset="50">Instalation guide</AnchorLink>
                    </Backbox>
                </Backbox>
                <Backbox color="light" addClass="partial column">
                    <b>Template overwview</b>
                    <Backbox color="outlined" addClass="partial column">
                        <AnchorLink href='#grid' offset="50"><p>Grid overview</p></AnchorLink>
                        <AnchorLink href='#animation' offset="50"><p>Animation</p></AnchorLink>
                    </Backbox>
                </Backbox>
                <Backbox color="light" addClass="partial column">
                    <b>Components</b>
                    <Backbox color="outlined" addClass="partial column">
                        <AnchorLink href='#button' offset="50"><p>Button</p></AnchorLink>
                        <AnchorLink href='#card' offset="50"><p>Card</p></AnchorLink>
                        <AnchorLink href='#input' offset="50"><p>Input</p></AnchorLink>
                        <AnchorLink href='#sectiontitle' offset="50"><p>Section title</p></AnchorLink>
                        <AnchorLink href='#textarea' offset="50"><p>Textarea</p></AnchorLink>
                    </Backbox>
                </Backbox>

            </Sidebar>
            <div className="page2 wrapper partial start-v column margin-l">
                <Backbox color="dark" animate={true} animateIn="fadeInUp" animateOnce={true} addClass="partial margin-btm">
                    <h1 id="instalation">Instalation</h1>
                </Backbox>
                <Backbox color="outlined" addClass='partial column margin-top margin-btm'>
                    <Backbox addClass="partial column">
                        <span className="margin-btm" >
                            To instal app template simply clone project running command in console
                        </span>
                        <b>git clone https://github.com/glemigobles/bitpage my-app-name</b>
                        <b>cd my-app-name</b>
                        <span className="margin-btm margin-top">
                            Then you may use standard create react app commands like:
                        </span>
                        <b>npm start</b>
                        <span className="margin-btm margin-top">
                            to run app in development mod or
                        </span>
                        <b>npm run build</b>
                        <span className="margin-btm margin-top">
                            to compile production build
                        </span>
                        <span>You can learn more in the <b><a href="https://facebook.github.io/create-react-app/docs/getting-started" target="_blank" rel="noopener noreferrer" name="cra">Create React App documentation.</a></b></span>
                    </Backbox>
                </Backbox>
                <Backbox color="dark" animate={true} animateIn="fadeInUp" animateOnce={true} addClass="partial margin-btm">
                    <h1>Template overwview</h1>
                </Backbox>
                <div id="animation"></div>
                <Backbox color="outlined" addClass='partial column margin-top margin-btm'>
                    <Sectionhead subtitleAnimation="fadeInLeft" lineAnimation="fadeInLeft" animateIn={'fadeInUp'} animate={true} animateOnce={false} title={'Animations'} subtitle={'<ScrollAnimation>{children.content}<ScrollAnimation/>'}></Sectionhead >
                    <Backbox addClass="margin-top">
                        <span className="margin-top margin-btm">
                            Animations are execiuted by external library:
                    <a href="https://github.com/dbramwell/react-animate-on-scroll" target="_blank" rel="noopener noreferrer" name="raos-github"><h2 className="margin-btm" > React Animate On Scroll </h2></a>
                            Read r-a-o-s <a href="https://github.com/dbramwell/react-animate-on-scroll" target="_blank" rel="noopener noreferrer" name="raos-github">documentation</a> to get info how to use it.
                    <br></br>
                            Besides default options given by r-a-o-s library, every component of that template has options listed below.
                </span>
                    </Backbox>
                    <Backbox color="dark" addClass="partial margin-top" >
                        <b id="animation-options">Components animation options:</b>
                    </Backbox>
                    <Backbox color="outlined" addClass="partial column">
                        <hr className="partial"></hr>
                        <p><b>animate:</b> (boolean) true/false - default: false</p>
                        <hr className="partial"></hr>
                        <p><b>animateIn:</b> (string) (from animate.css e.g: 'fadeIn','bounceIn' - default: 'fadeIn')</p>
                        <hr className="partial"></hr>
                        <p><b>animateOut:</b> (string) (from animate.css e.g: 'fadeOut','bounceOut' - default: 'fadeOut')</p>
                        <hr className="partial"></hr>
                        <p><b>animateOnce:</b> (boolean) true/false - default: false</p>
                        <hr className="partial"></hr>
                        <p><b>animationOffset:</b> (integer) in px - default: 50</p>
                        <hr className="partial"></hr>
                        <p><b>animationDuration:</b> (float) in s - default: 0.5</p>
                        <hr className="partial"></hr>
                        <p><b>animationDelay:</b> (integer) in ms - default: 0</p>
                        <hr className="partial"></hr>
                    </Backbox>
                </Backbox>

                <Backbox color="dark" animate={true} animateIn="fadeInUp" animateOnce={true} addClass="partial margin-btm">
                    <h1>Components</h1>
                </Backbox>
                <div id="button"></div>
                <Backbox color="outlined" addClass='partial column margin-top margin-btm'>
                    <Sectionhead subtitleAnimation="fadeInLeft" lineAnimation="fadeInLeft" animateIn={'fadeInUp'} animate={true} animateOnce={false} title={'Button'} subtitle={'<Button>{children.content}</Button>'}></Sectionhead >
                    <Backbox addClass='partial column center-v center-h margin-top margin-btm'>
                        <p className="margin-top">default</p>
                        <Button animate={true}>button</Button>
                        <p className="margin-top">color='light-invert'</p>
                        <Button color={'light-invert'}>button</Button>
                        <p className="margin-top">color='dark'</p>
                        <Button color={'dark'}>button</Button>
                        <p className="margin-top">color='dark-invert'</p>
                        <Button color={'dark-invert'}>button</Button>
                    </Backbox>
                    <Backbox color="dark" addClass="partial" >
                        <b>Component options:</b>
                    </Backbox>
                    <Backbox color="outlined" addClass="partial column">
                        <hr className="partial"></hr>
                        <p><b>color:</b> (string) 'light','light-inverted','dark', 'dark-inverted' - default: 'light</p>
                        <hr className="partial"></hr>
                        <p><b>addClass:</b> (string) - class/clsses names </p>
                        <hr className="partial"></hr>
                        <p><AnchorLink offset="100" href="#animation-options"><b>animation options:</b> go to options</AnchorLink></p>
                        <hr className="partial"></hr>
                    </Backbox>
                </Backbox>
                <div id="card"></div>
                <Backbox color="outlined" addClass='partial column margin-top margin-btm'>
                    <Sectionhead subtitleAnimation="fadeInLeft" lineAnimation="fadeInLeft" animateIn={'fadeInUp'} animate={true} animateOnce={false} title={'Card'} subtitle={'<Card>{children.content}</Card>'}></Sectionhead >
                    <Backbox addClass='partial column center-v center-h margin-top margin-btm'>
                        <p className="margin-top">Basic card element</p>
                        <Card>
                            lorem ipsum sit dolar amend. lorem ipsum sit dolar amend. lorem ipsum sit dolar amend.
                            lorem ipsum sit dolar amend. lorem ipsum sit dolar amend. lorem ipsum sit dolar amend.
                            lorem ipsum sit dolar amend. lorem ipsum sit dolar amend. lorem ipsum sit dolar amend.
                            lorem ipsum sit dolar amend. lorem ipsum sit dolar amend. lorem ipsum sit dolar amend.
                </Card>
                        <p className="margin-top">Card element with title</p>
                        <Card title={'card title'} animateIn="fadeIn">
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
                    </Backbox>
                    <Backbox color="dark" addClass="partial" >
                        <b>Component options:</b>
                    </Backbox>
                    <Backbox color="outlined" addClass="partial column">
                        <hr className="partial"></hr>
                        <p><b>addClass:</b> (string) - class/clsses names </p>
                        <hr className="partial"></hr>
                        <p><b>title:</b> (string)</p>
                        <hr className="partial"></hr>
                        <p><b>icon:</b> (string) - path to img/svg</p>
                        <hr className="partial"></hr>
                        <p><AnchorLink offset="100" href="#animation-options"><b>animation options:</b> go to options</AnchorLink></p>
                        <hr className="partial"></hr>
                    </Backbox>
                </Backbox>
                <div id="input"></div>
                <Backbox color="outlined" addClass='partial column margin-top margin-btm'>
                    <Sectionhead subtitleAnimation="fadeInLeft" lineAnimation="fadeInLeft" animateIn={'fadeInUp'} animate={true} animateOnce={false} title={'Input'} subtitle={'<Input/>'}></Sectionhead >
                    <Backbox addClass='partial column center-v center-h margin-top margin-btm'>
                        <Input label="default input" addClass="partial center-h" ></Input>
                        <Input color="dark" label="input color='dark'" addClass="partial center-h"></Input>
                        <Input color="light" rows="8" label="input color='light'" addClass="partial center-h"></Input>
                    </Backbox>
                    <Backbox color="dark" addClass="partial" >
                        <b>Component options:</b>
                    </Backbox>
                    <Backbox color="outlined" addClass="partial column">
                        <hr className="partial"></hr>
                        <p><b>color:</b> (string) - 'light','dark' - default:null </p>
                        <hr className="partial"></hr>
                        <p><b>addClass:</b> (string) - class/clsses names </p>
                        <hr className="partial"></hr>
                        <p><b>name:</b> (string)</p>
                        <hr className="partial"></hr>
                        <p><b>value:</b> (string)</p>
                        <hr className="partial"></hr>
                        <p><b>form:</b> (string)</p>
                        <hr className="partial"></hr>
                        <p><b>label:</b> (string)</p>
                        <hr className="partial"></hr>
                        <p><AnchorLink offset="100" href="#animation-options"><b>animation options:</b> go to options</AnchorLink></p>
                        <hr className="partial"></hr>
                    </Backbox>
                </Backbox>
                <div id="sectiontitle"></div>
                <Backbox color="outlined" addClass='partial column margin-top margin-btm'>
                    <Sectionhead subtitleAnimation="fadeInLeft" lineAnimation="fadeInLeft"
                        animateIn={'fadeInUp'} animate={true} animateOnce={false}
                        title={'Section title'} subtitle={'<Sectionhead/>'}></Sectionhead >
                    <Backbox addClass='partial column center-v center-h margin-top margin-btm'>
                        <Sectionhead
                            title={'Section title'} subtitle={'subtitle'}></Sectionhead >
                    </Backbox>
                    <Backbox color="dark" addClass="partial" >
                        <b>Component options:</b>
                    </Backbox>
                    <Backbox color="outlined" addClass="partial column">
                        <hr className="partial"></hr>
                        <p><b>addClass:</b> (string) - class/clsses names </p>
                        <hr className="partial"></hr>
                        <p><b>title:</b> (string)</p>
                        <hr className="partial"></hr>
                        <p><b>subtitle:</b> (string)</p>
                        <hr className="partial"></hr>
                        <p><b>lineAnimation:</b> (string) (from animate.css e.g: 'fadeIn','bounceIn' - default: 'fadeIn')</p>
                        <hr className="partial"></hr>
                        <p><b>subtitleAnimation:</b> (string) (from animate.css e.g: 'fadeIn','bounceIn' - default: 'fadeIn')</p>
                        <hr className="partial"></hr>
                        <p><AnchorLink offset="100" href="#animation-options"><b>animation options:</b> go to options</AnchorLink></p>
                        <hr className="partial"></hr>
                    </Backbox>
                </Backbox>
                <div id="textarea"></div>
                <Backbox color="outlined" addClass='partial column margin-top margin-btm'>
                    <Sectionhead subtitleAnimation="fadeInLeft" lineAnimation="fadeInLeft" animateIn={'fadeInUp'} animate={true} animateOnce={false} title={'Textarea'} subtitle={'<Textarea/>'}></Sectionhead >
                    <Backbox addClass="partial column center-v center-h margin-top margin-btm">
                        <Textarea label="default textarea'" name="tekst wiadomosci" addClass="partial center-h"></Textarea>
                        <Textarea color="dark" label="textarea color='dark'" addClass="partial center-h"></Textarea>
                        <Textarea color="light" rows="8" label="textarea color='light' rows='8'" addClass="partial center-h"></Textarea>
                    </Backbox>
                    <Backbox color="dark" addClass="partial" >
                        <b>Component options:</b>
                    </Backbox>
                    <Backbox color="outlined" addClass="partial column">
                        <hr className="partial"></hr>
                        <p><b>color:</b> (string) - 'light','dark' - default:null </p>
                        <hr className="partial"></hr>
                        <p><b>addClass:</b> (string) - class/clsses names </p>
                        <hr className="partial"></hr>
                        <p><b>name:</b> (string)</p>
                        <hr className="partial"></hr>
                        <p><b>value:</b> (string)</p>
                        <hr className="partial"></hr>
                        <p><b>form:</b> (string)</p>
                        <hr className="partial"></hr>
                        <p><b>label:</b> (string)</p>
                        <hr className="partial"></hr>
                        <p><b>rows:</b> (integer) - default: 5</p>
                        <hr className="partial"></hr>
                        <p><AnchorLink offset="100" href="#animation-options"><b>animation options:</b> go to options</AnchorLink></p>
                        <hr className="partial"></hr>
                    </Backbox>
                </Backbox>
            </div >
        </div>
    );
};

export default templatedocs;