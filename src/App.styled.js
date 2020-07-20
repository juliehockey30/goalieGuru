import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

const AppWrapper = styled.div`
  animation: 2s ${fadeInAnimation};

  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');
  font-family: 'Roboto Condensed';

  max-width: 100%;
  overflow-x: hidden;

  @media(min-width: 1024px) {
    max-width: 3000px;
  }
`;

const FooterImage = styled.img`
  width: 100%;
`;

export {
  AppWrapper,
  FooterImage
};
