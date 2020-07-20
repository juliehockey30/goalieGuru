import styled from 'styled-components'

const HamburgerWrapper = styled.div`
  background-color: #373739;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 16px;
  position: fixed;
  right: 0;
  top: 0;

  @media(min-width: 1024px) {
    display: none;
  }
`;

const HamburgerMenuItemWrapper = styled.ul`
  background-color: #373739;
  color: white;
  font-size: ${props => props.selected ? '24px' : '20px'};
  font-style: ${props => props.selected ? 'italic' : 'none'};
  list-style: none;
  margin-top: 0;
  padding: 0;
  position: fixed;
  right: 0;
  top: 50px;
  width: 50%;
`;

const HamburgerMenuItem = styled.li`
  border: 1px solid white;
  height: 40px;
  line-height: 40px;
  padding: 10px 20px;
  text-align: right;
`;

const MenuLabel = styled.label`
  color: white;
  margin-right: 16px;
`;

export{
  HamburgerWrapper,
  HamburgerMenuItemWrapper,
  HamburgerMenuItem,
  MenuLabel
};
