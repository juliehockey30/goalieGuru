import React, { Component } from 'react';
import AboutWren from './aboutWren/AboutWren.js';
import History from './history/History.js';
import Style from './style/Style.js';
import { MenuBar, MenuItem } from './About.styled.js';

class About extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedView: 'about'
    };

    this.menuItemOnClick = this.menuItemOnClick.bind(this);
  }

  menuItemOnClick(target) {
    this.setState({ selectedView: target });
  }

  render() {
    return (
      <div id="about">
        <MenuBar>
          <MenuItem
            onClick={() => this.menuItemOnClick('about')}
            selected={this.state.selectedView === 'about'}
          >About Coach Wren</MenuItem>
          <MenuItem
            onClick={() => this.menuItemOnClick('history')}
            selected={this.state.selectedView === 'history'}
          >Coaching History</MenuItem>
          <MenuItem
            onClick={() => this.menuItemOnClick('style')}
            selected={this.state.selectedView === 'style'}
          >Coaching Style</MenuItem>
        </MenuBar>
        {this.state.selectedView === 'about' ? <AboutWren /> : null}
        {this.state.selectedView === 'history' ? <History /> : null}
        {this.state.selectedView === 'style' ? <Style /> : null}
      </div>
    );
  }
}

export default About;
