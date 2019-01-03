import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import "animate.css/animate.min.css";
//layout
import Menu from './components/layout/menu';
import Navbar from './components/layout/navbar';
import Container from './components/layout/container';
//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
//transition/animations
import Transition from 'react-transition-group/Transition';

library.add(faBars, faTimesCircle, faGithub);

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App partial column">
          <Transition in={this.props.menu} timeout={300} mountOnEnter unmountOnExit>
            {(state) => (
              <Menu show={state} toggleMenu={this.props.toggleMenu} toggleLang={this.props.toggleLang} langs={this.props.lang}></Menu>
            )}
          </Transition>
          {this.props.nav ? <Navbar toggleMenu={this.props.toggleMenu}></Navbar> : null}
          <Container data={this.props}></Container>
        </div >
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
    menu: state.menu,
    nav: state.nav,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => dispatch({
      type: 'TOGGLE_MENU'
    }),
    toggleLang: (id) => dispatch({
      type: 'TOGGLE_LANG',
      val: id
    })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
