import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #d9dce2;

  @media(min-width: 1024px) {
    align-items: center;
    border-radius: 6px;
    color: #373739;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    height: 512px;
    justify-content: center;
    margin: 0 150px;
    padding: 0 24px 24px 24px;
  }
`;

const StyledList = styled.ul`

  @media(min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const JobWrapper = styled.div`

  @media(min-width: 1024px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    font-size: 20px;
    height: 56px;
  }
`;

const JobTime = styled.p`

  @media(min-width: 1024px) {
    font-weight: 500;
    margin-left: 12px;
  }
`;

const LogoWrapper = styled.div`

  @media(min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;

const JobLogo = styled.img`

  @media(min-width: 1024px) {
    margin: 0 56px;
    max-height: 150px;
    max-width: 500px;
  }
`;

export {
  Wrapper,
  StyledList,
  JobWrapper,
  LogoWrapper,
  JobTime,
  JobLogo
};
