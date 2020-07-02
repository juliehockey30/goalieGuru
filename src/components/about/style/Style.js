import React, { Component } from 'react';
import CoachWren2 from '../../../images/CoachWren2.JPG';
import {
  Wrapper,
  StyledImage,
  BodyWrapper,
  Body,
  NameTitleWrapper,
  Name,
  Title
} from './Style.styled.js';

class Style extends Component {
  constructor(props){
    super(props);
    this.state={};

    this.styleBodyPart1 = "\"My one main rule with regards to my technique and coaching, is that I am a resource and never going to try to change any goaltender's style. I will help the goalie build on his or her specific techniques and provide input on changes I believe will be helpful but I never take the approach of 'my way or the highway.'\""
    this.styleBodyPart2 = "\"The goalies are the ones who innovate the position, It's the goalie coach who helps them apply their innovations. I firmly believe in continuous work on the fundamentals and age appropriate development.\""
    this.styleBodyPart3 = "\"I try not to overcomplicate drills, focusing on body mechanics, and quality repetitions over quantity. Goaltenders develop at a faster rate by doing drills that allow them to feel the puck with gamelike shots and situations, not by drills that look fancy.\""
    this.styleBodyPart4 = "\"I am always seeking to apply the most recent and advanced techniques to make goalies better and keep them safer.\""
  }


  render() {
    return (
      <Wrapper>
        <StyledImage src={CoachWren2} />
        <BodyWrapper>
          <Body>{this.styleBodyPart1}</Body>
          <Body>{this.styleBodyPart2}</Body>
          <Body>{this.styleBodyPart3}</Body>
          <Body>{this.styleBodyPart4}</Body>
          <NameTitleWrapper>
            <Name>- Coach Wren</Name>
            <Title>Owner and Creator of Goalie Guru</Title>
          </NameTitleWrapper>
        </BodyWrapper>
      </Wrapper>
    );
  }
}

export default Style;
