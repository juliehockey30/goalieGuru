import React, { Component } from 'react';
import mountains from '../../images/moutains.jpeg';
import logo2 from '../../images/GoalieGuruLogo2.png';
import {
  MarqueeWrapper,
  MarqueeGradient,
  MarqueeLogo,
  MarqueeImage,
  TaglineOne,
  TaglineTwo
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
          <TaglineOne>Trust the Process</TaglineOne>
          <TaglineTwo>1% Better, Every Day</TaglineTwo>
        </MarqueeGradient>
      </MarqueeWrapper>
    );
  }
}

export default Marquee;
