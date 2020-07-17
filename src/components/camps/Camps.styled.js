import styled from 'styled-components';

const Wrapper = styled.div`

  @media(min-width: 1024px) {
    border: 6px solid #373739;
    margin: 32px 140px;
    border-radius: 8px;
  }
`;

const Header = styled.p`

  @media(min-width: 1024px) {
    color: #373739;
    font-size: 54px;
    font-weight: bold;
    text-align: center;
  }
`;

export {
  Wrapper,
  Header
};
