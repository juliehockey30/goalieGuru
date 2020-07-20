import React, { Component } from 'react';
import { AppWrapper, FooterImage } from './App.styled.js';
import Marquee from './components/marquee/Marquee.js';
import NavBar from './components/navBar/NavBar.js';
import HamburgerMenu from './components/navBar/hamburgerMenu/HamburgerMenu.js';
import About from './components/about/About.js';
import Camps from './components/camps/Camps.js';
import Testimonials from './components/testimonials/Testimonials.js';
import Contact from './components/contact/Contact.js';
import footerMountains from './images/moutainsFooter.png';

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
        <HamburgerMenu scrollToElement={this.scrollToElement}/>
        <Marquee />
        <About />
        <Camps />
        <Testimonials />
        <Contact />
        <FooterImage src={footerMountains} />
      </AppWrapper>
    );
  }
}

export default App;
