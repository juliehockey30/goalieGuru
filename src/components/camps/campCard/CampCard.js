import React, { Component } from 'react';
import { Wrapper, Title, DateAndLocation, RegisterButton } from './CampCard.styled.js';

class CampCard extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render() {
    return (
      <Wrapper>
        <Title>{this.props.title}</Title>
        <DateAndLocation>{this.props.dates}7</DateAndLocation>
        <DateAndLocation>{this.props.location}</DateAndLocation>
        <RegisterButton href={this.props.registerLink}>Register Now!</RegisterButton>
      </Wrapper>
    );
  }
}

export default CampCard;
