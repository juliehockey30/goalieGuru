import styled from 'styled-components';

const MenuBar = styled.div`

  @media(min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const MenuItem = styled.p`

  @media(min-width: 1024px) {
    border-bottom: ${props => props.selected ? '3px solid #27ace2' : 'unset'}
    color: ${props => props.selected ? '#27ace2' : '#373739'};
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    margin: 50px 3% 0 3%;
    padding-bottom: 16px;
  }

`;
export {
  MenuBar,
  MenuItem
};
