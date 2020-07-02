import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #d9dce2;

  @media(min-width: 1024px) {
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    height: 512px;
    justify-content: center;
    margin: 0 10%;
    padding: 24px;
  }
`;

const BioWrapper = styled.div`

  @media(min-width: 1024px) {
    font-size: 16px;
    padding: 24px;
  }
`;

const Bio = styled.p`

  @media(min-width: 1024px) {
    font-size: 20px;
  }
`;

const StyledImage = styled.img`

  @media(min-width: 1024px) {
    border-radius: 6px;
    margin-left: 48px;
    width: 50%;
  }
`;

export {
  Wrapper,
  BioWrapper,
  Bio,
  StyledImage
};
