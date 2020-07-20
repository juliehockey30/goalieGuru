import styled from 'styled-components';

const Wrapper = styled.div`
border: 3px solid #373739;
border-radius: 8px;
margin: 32px 18px;

  @media(min-width: 1024px) {
    border: 6px solid #373739;
    border-radius: 8px;
    margin: 32px 140px;
  }
`;

const Header = styled.p`
  font-size: 24px;
  color: #373739;
  font-weight: bold;
  text-align: center;

  @media(min-width: 1024px) {
    font-size: 54px;
  }
`;

export {
  Wrapper,
  Header
};
