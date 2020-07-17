import React, { Component } from 'react';
import bulgaria from '../../../images/jobLogos/bulgaria.png';
import globalGoaltending from '../../../images/jobLogos/globalGoaltending.png';
import usaHockey from '../../../images/jobLogos/usaHockey.png';
import {
  Wrapper,
  StyledList,
  JobWrapper,
  JobTime,
  LogoWrapper,
  JobLogo
} from './History.styled.js';

class History extends Component {
  constructor(props){
    super(props);
    this.state={};

  }

  render() {
    return (
      <Wrapper>
        <StyledList>
          <JobWrapper>
            <li>Goalie Coach Bulgarian National Team IIHF Division 2</li>
            <JobTime>(2017-Present)</JobTime>
          </JobWrapper>
          <JobWrapper>
            <li>USA Hockey Goaltending Development Coordinator</li>
            <JobTime>(Colorado) (2020)</JobTime>
          </JobWrapper>
          <JobWrapper>
            <li>On Ice Director - Goalie Guild's Global Goaltending Retreat</li>
            <JobTime>(2017-Present)</JobTime>
          </JobWrapper>
          <JobWrapper>
            <li>Association Goalie Coach - Summit Hockey</li>
            <JobTime>(2010-2020)</JobTime>
          </JobWrapper>
          <JobWrapper>
            <li>Head Goaltending Instructor - Banff Hockey School</li>
            <JobTime>(2008-2010)</JobTime>
          </JobWrapper>
          <JobWrapper>
            <li>Goaltending Coach - Okanagan Hockey School</li>
            <JobTime>(2006-2009)</JobTime>
          </JobWrapper>
        </StyledList>
        <LogoWrapper>
          <JobLogo src={bulgaria} />
          <JobLogo src={usaHockey} />
          <JobLogo src={globalGoaltending} />
        </LogoWrapper>
      </Wrapper>
    );
  }
}

export default History;
