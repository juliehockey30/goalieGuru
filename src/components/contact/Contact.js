import React, { Component } from 'react';
import { Wrapper, Header, Email } from './Contact.styled.js';

class Contact extends Component {
  render() {
    return (
      <Wrapper id="contact">
        <Header>Interested in learning more? Let's chat!</Header>
        <Email href="mailto: wren.arbuthnot@gmail.com">wren.arbuthnot@gmail.com</Email>
      </Wrapper>
    );
  }
}

export default Contact;
