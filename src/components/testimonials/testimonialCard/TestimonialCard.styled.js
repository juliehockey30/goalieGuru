import styled from 'styled-components';

const CardBackground = styled.div`
  background-color: #d9dce2;
  border: 3px solid black;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;

  @media(min-width: 1024px) {
    padding: 24px;
    margin: 36px 0 0 36px;
  }
`;

const Body = styled.p`

`;

const Name = styled.p`
  font-size: 12px;
  margin: 0;
`;

const Title = styled.p`
  font-size: 12px;
  font-style: italic;
  margin: 0;
`;

export {
  CardBackground,
  Body,
  Name,
  Title
}
