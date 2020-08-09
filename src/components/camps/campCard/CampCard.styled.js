import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  background-color: #373739;
  border-radius: 50%;
  color: white;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  margin: 18px auto;
  width: 300px;

  @media(min-width: 1024px) {
    height: 400px;
    margin: 24px auto;
    width: 400px;
  }
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 900;
  margin: 8px 0 12px 0;
  text-align: center;

  @media(min-width: 1024px) {
    font-size: 48px;
    margin: 8px 0 12px 0;
  }
`;

const DateAndLocation = styled.p`
  font-size: 18px;
  margin: 0;

  @media(min-width: 1024px) {
    font-size: 28px;
  }
`;
const RegisterButton = styled.a`
  background-color: white;
  border-radius: 8px;
  color: black;
  font-size: 18px;
  margin-top: 24px;
  padding: 12px;
  text-decoration: none;

  @media(min-width: 1024px) {
    cursor: pointer;
    font-size: 24px;
    margin-top: 32px;
    padding: 16px;
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
