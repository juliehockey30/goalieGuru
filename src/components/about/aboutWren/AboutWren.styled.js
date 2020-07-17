import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #d9dce2;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  margin: 0 16px;

  @media(min-width: 1024px) {
    flex-direction: row;
    height: 512px;
    justify-content: center;
    margin: 0 10%;
    padding: 24px;
  }
`;

const BioWrapper = styled.div`
  font-size: 14px;
  padding: 0 16px;

  @media(min-width: 1024px) {
    font-size: 16px;
  }
`;

const Bio = styled.p`

  @media(min-width: 1024px) {
    font-size: 20px;
  }
`;

const StyledImage = styled.img`
  border-radius: 6px;
  margin: 12px;
  max-width: 100%;

  @media(min-width: 1024px) {
    margin: 0 0 0 48px;
    width: 50%;
  }
`;

export {
  Wrapper,
  BioWrapper,
  Bio,
  StyledImage
};
