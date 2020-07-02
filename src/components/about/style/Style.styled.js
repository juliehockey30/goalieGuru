import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #d9dce2;

  @media(min-width: 1024px) {
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    height: 512px;
    justify-content: center;
    margin: 0 150px;
    padding: 24px;
  }
`;

const StyledImage = styled.img`

  @media(min-width: 1024px) {
    border-radius: 6px;
    margin-left: 48px;
    width: 50%;
  }
`;

const BodyWrapper = styled.div`

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

  @media(min-width: 1024px) {
    margin-left: 200px;
  }
`;

const Name = styled.p`

  @media(min-width: 1024px) {
    font-size: 16px;
    font-weight: 700;
    margin: 0;
  }
`;

const Title = styled.p`

  @media(min-width: 1024px) {
    font-size: 14px;
    font-style: italic;
    font-weight: 700;
    margin: 0;
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
