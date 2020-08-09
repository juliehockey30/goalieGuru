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
  width: 100%;

  @media(min-width: 1024px) {
    width: 100%;
  }
`;

const MarqueeLogo = styled.img`
  height: 50px;
  position: absolute;
  top: 10px;

  @media(min-width: 1024px) {
    height: unset;
    top: 35px;
    width: 60%;
    z-index: 2;
  }
`;

const TaglineOne = styled.p`
  background-color: #27ace2;
  border: 8px solid black;
  left: 5%;
  opacity: 75%;
  padding: 12px;
  position: absolute;
  top: 70px;

  @media(min-width: 1024px) {
    font-size: 52px;
    font-weight: 900;
    left: 36%;
    padding: 24px;
    top: 250px;
  }
`;

const TaglineTwo = styled.p`
  background-color: #27ace2;
  border: 8px solid black;
  left: 50%;
  opacity: 75%;
  padding: 12px;
  position: absolute;
  top: 70px;

  @media(min-width: 1024px) {
    font-size: 52px;
    font-weight: 900;
    left: 34%;
    padding: 24px;
    top: 400px;
  }
`;

export {
  MarqueeWrapper,
  MarqueeGradient,
  MarqueeImage,
  MarqueeLogo,
  TaglineOne,
  TaglineTwo
};
