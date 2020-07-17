import React, { Component } from 'react';
import CampCard from './campCard/CampCard';
import {
  Wrapper,
  Header,
} from './Camps.styled.js';

class Camps extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render() {
    return (
      <Wrapper id="camps">
        <Header>Upcoming Camps and Clinics</Header>
        <CampCard
          title="Fall Clinic 2020"
          dates="September 26-27"
          location="Breckenridge, CO"
          registerLink="https://forms.gle/bX2FaXZ1L1DwgaVS7"
        />
      </Wrapper>
    );
  }
}

export default Camps;
