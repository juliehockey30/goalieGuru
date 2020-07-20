import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  margin: 32px 0;

  @media(min-width: 1024px) {
    margin: 48px 0;
  }
`;

const Header = styled.p`
  color: #373739;
  font-size: 28px;
  font-weight: bold;
  margin: 24px;
  text-align: center;

  @media(min-width: 1024px) {
    font-size: 54px;
    margin: 0 0 12px 0;
  }
`;

const Email = styled.a`
  color: #27ace2;
  font-size: 24px;
  text-decoration: none;

  @media(min-width: 1024px) {
    cursor: pointer;
    font-size: 32px;
  }
`;

export {
  Wrapper,
  Header,
  Email
}
