import React, { useState } from 'react';
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

import { StyledEngineProvider } from '@mui/material/styles';
import TemporaryDrawer from './Navigation_bar';



const HeaderAL = ({ onToggleActive, onToggleSideBarActive, }) => {


  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isChangeButton, setIsChangeButton] = useState(false);

  const handleSearch = (searchTerm) => {
    // Perform search logic here
    console.log('Search term:', searchTerm);
  };

  const handleButtonClick = () => {
    setIsSearchBarVisible((prevState) => !prevState);
  };

  const handleButtonChange = () => {
    setIsChangeButton((prevState) => !prevState);
    console.log(isChangeButton);
  };

  const handleClick = () => {
    onToggleActive();
  };

  const handleClickSideBar = () => {
    onToggleSideBarActive();
  };

  return (
    <div className="header-AL">
      <div className="frame-container">
        <StyledEngineProvider injectFirst>
          <TemporaryDrawer />
        </StyledEngineProvider>
        <div className="divfn-nav-bar-wrapper">
          <div className="divfn-nav-bar-frame">
            {isSearchBarVisible && <SearchBar onSearch={handleSearch} />}
            <div className="divbar-item-icon1">
              <button onClick={handleButtonClick} className="link-item">
                <img className="svg-icon22" alt="" src={search} />
              </button>
            </div>

            <div className="divbar-item-icon1">
              <button className="link-item">
                <img className="svg-icon22" alt="" src={svg} />
                <div className="pseudo-item"></div>
              </button>
            </div>
            <div className="divbar-item-icon1">
              <FullScreenButton />
            </div>

            <div className="divbar-item-icon1">
              <button onClick={handleClick} className="link-item">
                <img className="svg-icon22" alt="" src={light_mode} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAL;