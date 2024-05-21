import React, { Component } from 'react';


import './HomePageAL.css';
import HeaderAL from '../components/home_page_AL/HeaderAL';
import NavigationBar from '../components/home_page_AL/Navigation_bar';
import FooterAL from '../components/home_page_AL/FooterAL';
import QuickChat from '../components/home_page_AL/QuickChat';
import MainPageAL from '../components/home_page_AL/MainPageAL';

class HomePageAL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isSideBarActive:false
    };
  }

  handleToggleActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  };
  
  handleToggleSideBarActive = () => {
    this.setState(prevState => ({
      isSideBarActive: !prevState.isSideBarActive,
    }));
  };
  

  render() {
    const { isActive } = this.state;
    const { isSideBarActive} = this.state;
    return (
      <div className={`desktop-AL ${isActive ? 'white' : 'dark'}`}>
        <div className="global-frame-section">
          <NavigationBar className={`${isSideBarActive ? 'oppen' : 'close'}`} />
          { isSideBarActive ? (
              <div className="frame-parent with-sidebar" >
                <div className="frame-group">
                  <div className="header-parent">
                    <HeaderAL onToggleActive={this.handleToggleActive} onToggleSideBarActive={this.handleToggleSideBarActive} />
                    <MainPageAL />
                  </div>
                  <QuickChat />
                </div>
                <FooterAL />
              </div>
            ) : (
              <div className="frame-parent without-sidebar" >
                <div className="frame-group">
                  <div className="header-parent">
                    <HeaderAL onToggleActive={this.handleToggleActive} onToggleSideBarActive={this.handleToggleSideBarActive} />
                    <MainPageAL />
                  </div>
                  <QuickChat />
                </div>
                <FooterAL />
              </div>
            )
          }
          
        </div>
      </div>
    );
  }
}

export default HomePageAL;