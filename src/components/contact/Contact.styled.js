import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  margin: 32px 0;
`;

const Header = styled.p`

  @media(min-width: 1024px) {
    color: #373739;
    font-size: 54px;
    font-weight: bold;
    margin-bottom: 16px;
    text-align: center;
  }
`;

const Email = styled.a`
  color: #27ace2;
  cursor: pointer;
  font-size: 32px;
  text-decoration: none;
`;

export {
  Wrapper,
  Header,
  Email
}
