import styled from 'styled-components';

const MenuBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media(min-width: 1024px) {

  }
`;

const MenuItem = styled.p`
  border-bottom: ${props => props.selected ? '3px solid #27ace2' : 'unset'}
  color: ${props => props.selected ? '#27ace2' : '#373739'};
  font-size: 16px;
  font-weight: bold;
  height: fit-content;
  margin: 24px 16px 0 16px;
  padding-bottom: 16px;
  text-align: center;

  @media(min-width: 1024px) {
    cursor: pointer;
    font-size: 24px;
    height: unset;
    margin: 50px 3% 0 3%;
  }

`;
export {
  MenuBar,
  MenuItem
};
