import React, { Component } from 'react';
import { NavigationWrapper, NavItem } from './NavBar.styled.js';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedItem: 'home'
    };

    this.navItemOnClick = this.navItemOnClick.bind(this);
  }

  navItemOnClick(target) {
    this.setState({ selectedItem: target });
    this.props.scrollToElement(target);
  }

  render() {
    return (
      <NavigationWrapper>
        <NavItem
          onClick={() => this.navItemOnClick('home')}
          selected={this.state.selectedItem === 'home'}
        >HOME</NavItem>
        <NavItem
          onClick={() => this.navItemOnClick('about')}
          selected={this.state.selectedItem === 'about'}
        >ABOUT</NavItem>
        <NavItem
          onClick={() => this.navItemOnClick('camps')}
          selected={this.state.selectedItem === 'camps'}
        >CAMPS</NavItem>
        <NavItem
          onClick={() => this.navItemOnClick('testimonials')}
          selected={this.state.selectedItem === 'testimonials'}
        >TESTIMONIALS</NavItem>
        <NavItem
          onClick={() => this.navItemOnClick('contact')}
          selected={this.state.selectedItem === 'contact'}
        >CONTACT</NavItem>
      </NavigationWrapper>
    );
  }
}

export default NavBar;
