import React, { Component } from 'react';
import { CardBackground, Body, Name, Title } from './TestimonialCard.styled.js';

class TestimonialCard extends Component {

  render() {
    return (
      <CardBackground>
        <Body>{this.props.card.body}</Body>
        <Name>{this.props.card.name}</Name>
        <Title>{this.props.card.title}</Title>
      </CardBackground>
    );
  }
}

export default TestimonialCard;
