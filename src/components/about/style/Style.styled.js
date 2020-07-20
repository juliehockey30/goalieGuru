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

const StyledImage = styled.img`
  border-radius: 6px;
  margin: 12px;
  max-width: 100%;

  @media(min-width: 1024px) {
    margin: 0 0 0 48px;
    width: 50%;
  }
`;

const BodyWrapper = styled.div`
  font-size: 14px;
  padding: 18px;

  @media(min-width: 1024px) {
    font-size: 18px;
    padding: 24px;
  }
`;

const Body = styled.p`

  @media(min-width: 1024px) {
    margin: 12px 0 0 0;
  }
`;

const NameTitleWrapper = styled.div`
  margin: 16px 0 16px 120px;

  @media(min-width: 1024px) {
    margin: 32px 0 0 200px;
  }
`;

const Name = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin: 0;

  @media(min-width: 1024px) {
    font-size: 16px;
  }
`;

const Title = styled.p`
  font-size: 12px;
  font-style: italic;
  font-weight: 700;
  margin: 0;

  @media(min-width: 1024px) {
    font-size: 14px;
  }
`;

export {
  Wrapper,
  StyledImage,
  BodyWrapper,
  Body,
  NameTitleWrapper,
  Name,
  Title,
};
