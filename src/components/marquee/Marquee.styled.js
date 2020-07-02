import styled from 'styled-components';

const MarqueeWrapper = styled.div`

  @media(min-width: 1024px) {
    /* background: #d9dce2 */
    background: linear-gradient(to bottom, #d9dce2, #ffffff);
    padding-top: 56px;
    /* -webkit-mask-image: -webkit-gradient(linear, left 90%, left bottom, from(rgba(255,255,255,1)), to(rgba(255,255,255,0))) */
  }
`;

const MarqueeGradient = styled.div`

  @media(min-width: 1024px) {
    /* background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)); */
    /* -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%); */
  }
`;

const MarqueeImage = styled.img`

  @media(min-width: 1024px) {
    width: 100%;
  }
`;

const MarqueeLogo = styled.img`
  height: 300px;
  position: absolute;
  top: 35px;

  @media(min-width: 1024px) {
    height: unset;
    width: 60%;
    z-index: 2;
  }
`;

export {
  MarqueeWrapper,
  MarqueeGradient,
  MarqueeImage,
  MarqueeLogo
};
