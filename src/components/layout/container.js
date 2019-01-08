import React from 'react';
import './container.scss';
import { Route } from 'react-router-dom';
import Home from '../../pages/home';
import Templatedocs from '../../pages/templatedocs';


const container = (props) => {
    return (
        <div className="container partial column" >
            <Route path="/" exact render={() => <Home data={props.data}/>} />
            <Route path="/components" exact render={() => <Templatedocs data={props.data}/>} />
        </div >
    );
};

export default container;