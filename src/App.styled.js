import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

const AppWrapper = styled.div`
  animation: 2s ${fadeInAnimation};

  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');
  font-family: 'Roboto Condensed';
`;

export {
  AppWrapper
};
