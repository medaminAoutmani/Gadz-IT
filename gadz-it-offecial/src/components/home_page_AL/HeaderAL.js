import React, { Component } from 'react';
import './HeaderAL.css';
import FullScreenButton from '../home_page_BL/FullScreen';

import SearchBar from '../home_page_BL/SearchBar';

import light_mode from '../../assets/SVGlight-mode.svg';
import svg from '../../assets/svg.svg';
import link from '../../assets/link@2x.png';
import nav_butt from '../../assets/Vectornav-butt.svg';
import nav_butt_hover from '../../assets/Vectornav-butt-hover.svg';
import search from '../../assets/Vectorsearch.svg';
import close_sidebar from '../../assets/angle-left.png';
import close_sidebar_hover from '../../assets/angle-left-hover.png';
//import full_screen from '../../assets/SVGfull-screen.svg';




class HeaderAL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchBarVisible: false,
      isActive: false,
      isChangeButton: false,
    };
  }


  handleSearch = (searchTerm) => {
    // Perform search logic here
    console.log('Search term:', searchTerm);
  };

  handleButtonClick = () => {
    if (!this.state.isSearchBarVisible) {
      this.setState({ isSearchBarVisible: true });
    }else {
      this.setState({ isSearchBarVisible: false });
    }
    
  };
  
  handleButtonChange = () => {
    if (!this.state.isChangeButton) {
      this.setState({ isChangeButton: true });
    }else {
      this.setState({ isChangeButton: false });
    }
    console.log(this.state.isChangeButton)
  };

    

  handleClick = () => {
    const { onToggleActive } = this.props;
    onToggleActive();
  };

  handleClickSideBar = () => {
    const { onToggleSideBarActive } = this.props;
    onToggleSideBarActive();
  };

  render() {

    const { isSearchBarVisible } = this.state;
    const { isChangeButton } = this.state;

    
    

    return (
      <div class="header-AL">
                <div class="frame-container">
                  <div class="button-wrapper">
                    <button onClick={() => { this.handleClickSideBar(); this.handleButtonChange();}} class="button2">
                      { isChangeButton?
                       (
                          <div>
                            <img
                              class="img-svg1"
                              alt=""
                              src={close_sidebar}
                            />
                            <img
                              class="img-svg1-hover"
                              alt=""
                              src={close_sidebar_hover}
                            />
                          </div>
                        ) : (
                          <div>
                            <img
                              class="img-svg1"
                              alt=""
                              src={nav_butt}
                            />
                            <img
                              class="img-svg1-hover"
                              alt=""
                              src={nav_butt_hover}
                            />
                          </div>
                        )
                      }
                    </button>
                  </div>
                  <div class="divfn-nav-bar-wrapper">
                    <div class="divfn-nav-bar-frame">
                     {isSearchBarVisible && <SearchBar onSearch={this.handleSearch}/>}
                      <div className='divbar-item-icon1'>
                        <button onClick={this.handleButtonClick} className='link-item'>
                          <img
                            class="svg-icon22"
                            alt=""
                            src={search}
                          />
                        </button>
                      </div>
                      
                      <div class="divbar-item-icon1">
                        <button class="link-item">
                          <img
                            class="svg-icon22"
                            alt=""
                            src={svg}
                          />
                          <div class="pseudo-item"></div>
                        </button>
                      </div>
                      <div className='divbar-item-icon1'>
                        <FullScreenButton/>
                      </div>

                      <div className='divbar-item-icon1'>
                        <button onClick={this.handleClick} className='link-item'>
                          
                          <img
                            class="svg-icon22"
                            alt=""
                            src={light_mode}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    )
  }
}

export default HeaderAL;