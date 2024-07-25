import React, { useState } from 'react';

import ScrollToTop from '../components/home_page_AL/scroll/ScrollToTop';

import './HomePageAL.css';
import HeaderAL from '../components/home_page_AL/HeaderAL';
//import NavigationBar from '../components/home_page_AL/Navigation_bar';
import FooterAL from '../components/home_page_AL/FooterAL';
import QuickChat from '../components/home_page_AL/QuickChat';
import MainPageAL from '../components/home_page_AL/MainPageAL';

import { StyledEngineProvider } from '@mui/material/styles';


const HomePageAL = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSideBarActive, setIsSideBarActive] = useState(false);
  const [navigatePage, setNavigatePage] = useState('Project');

  const handleToggleActive = () => {
    setIsActive(prevState => !prevState);
  };

  const handleToggleSideBarActive = () => {
    setIsSideBarActive(prevState => !prevState);
  };

  return (
    <div className={`desktop-AL ${isActive ? 'white' : 'dark'}`}>
      <div className="global-frame-section">
        <div className="frame-parent without-sidebar">
          <div className="frame-group">
            <div className="header-parent">
              <HeaderAL
                onToggleActive={handleToggleActive}
                onToggleSideBarActive={handleToggleSideBarActive}
              />
              <MainPageAL />
            </div>
            <QuickChat />
          </div>

        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default HomePageAL;