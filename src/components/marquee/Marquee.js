import React, { Component } from 'react';
import mountains from '../../images/moutains.jpeg';
import logo2 from '../../images/GoalieGuruLogo2.png';
import {
  MarqueeWrapper,
  MarqueeGradient,
  MarqueeLogo,
  MarqueeImage
} from './Marquee.styled.js';

class Marquee extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render() {
    return (
      <MarqueeWrapper id="home">
        <MarqueeGradient>
          <MarqueeLogo src={logo2} />
          <MarqueeImage src={mountains} />
        </MarqueeGradient>
      </MarqueeWrapper>
    );
  }
}

export default Marquee;
