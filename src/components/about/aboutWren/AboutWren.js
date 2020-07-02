import React, { Component } from 'react';
import CoachWren from '../../../images/CoachWren.jpg';
import { Wrapper, BioWrapper, Bio, StyledImage } from './AboutWren.styled.js';

class AboutWren extends Component {
  constructor(props){
    super(props);
    this.state={};

    this.bioOne = "Wren is a Goaltending Coach based in Breckenridge, Colorado. He has been involved in coaching goaltending since 2003.";

    this.bioTwo = "Wren has worked with many different associations, camps and has coached with some of the most prolific goalie coaches from all over the world. He has coached goaltenders from never-ever goalies who are just learning to move in the pads, all the way up through varying levels of professional goaltenders and International Ice Hockey Federation goalies who have enjoyed his technique and approach to coaching.";

    this.bioThree = "Wren always uses the most recent information about the position to coach at the cutting edge of goalie development.";
  }

  render() {
    return (
      <Wrapper>
        <BioWrapper>
          <Bio>{this.bioOne}</Bio>
          <Bio>{this.bioTwo}</Bio>
          <Bio>{this.bioThree}</Bio>
        </BioWrapper>
        <StyledImage src={CoachWren} />
      </Wrapper>
    );
  }
}

export default AboutWren;
