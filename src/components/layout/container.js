import React from 'react';
import './container.scss';
import { Route } from 'react-router-dom';
import Home from '../../pages/home';
import Page from '../../pages/page';
import Page2 from '../../pages/page2';


const container = (props) => {
    return (
        <div className="container partial column" >
            <Route path="/" exact render={() => <Home data={props.data}></Home>} />
            <Route path="/components" exact render={() => <Page2 data={props.data}></Page2>} />
            <Route path="/contact" exact render={() => <Page data={props.data}></Page>} />
        </div >
    );
};

export default container;