import styled from 'styled-components';

const Wrapper = styled.div`

  @media(min-width: 1024px) {
    align-items: center;
    background-color: #373739;
    border-radius: 50%;
    color: white;
    display: flex;
    flex-direction: column;
    height: 400px;
    justify-content: center;
    margin: 48px auto;
    width: 400px;
  }
`;

const Title = styled.p`

  @media(min-width: 1024px) {
    font-size: 48px;
    font-weight: 900;
    margin: 8px 0 12px 0;
  }
`;

const DateAndLocation = styled.p`

  @media(min-width: 1024px) {
    font-size: 28px;
    margin: 0;
  }
`;
const RegisterButton = styled.a`

  @media(min-width: 1024px) {
    background-color: white;
    border-radius: 8px;
    color: black;
    cursor: pointer;
    font-size: 24px;
    margin-top: 32px;
    padding: 16px;
    text-decoration: none;
  }

  &:hover {
    background-color: #27ace2;
    color: white;
  }
`;

export {
  Wrapper,
  Title,
  DateAndLocation,
  RegisterButton
};
