import styled from 'styled-components';

const NavigationWrapper = styled.div`
  display: none;

  @media(min-width: 1024px) {
    display: block;
    position: fixed;
    right: 0;
    top: 30px;
    width: 200px;
    z-index: 4;
  }
`;

const NavItem = styled.div`

  @media(min-width: 1024px) {
    background-color: ${props => props.selected ? '#27ace2' : '#373739'};
    color: white;
    cursor: pointer;
    font-size: ${props => props.selected ? '24px' : '20px'};
    font-style: ${props => props.selected ? 'italic' : 'none'};
    margin: 8px 0;
    padding: 12px 24px;
  }

  &:hover {
    background-color: ${props => props.selected ? '#27ace2' : '#656565'};
  }
`;
export {
  NavigationWrapper,
  NavItem
};
