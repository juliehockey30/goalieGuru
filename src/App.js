import React, { Component } from 'react';
import { AppWrapper } from './App.styled.js';
import Marquee from './components/marquee/Marquee.js';
import NavBar from './components/navBar/NavBar.js';
import About from './components/about/About.js';
import Camps from './components/camps/Camps.js';

class App extends Component {
  constructor(props){
    super(props);
    this.isMobile = window.innerWidth <= 768;

    this.scrollToElement = this.scrollToElement.bind(this);
  }

  scrollToElement(id) {
    const element = document.getElementById(id);
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <AppWrapper >
        <NavBar scrollToElement={this.scrollToElement}/>
        <Marquee />
        <About />
        <Camps />
      </AppWrapper>
    );
  }
}

export default App;