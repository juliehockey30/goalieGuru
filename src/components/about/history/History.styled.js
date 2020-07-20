import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #d9dce2;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  margin: 0 16px;

  @media(min-width: 1024px) {
    height: 512px;
    justify-content: center;
    margin: 0 10%;
    padding: 24px;
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
  display: flex;
  flex-direction: row;
  margin: 0 auto 32px auto;
`;

const JobLogo = styled.img`
  margin: 0 18px;
  max-height: 50px;
  max-width: 300px;

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
