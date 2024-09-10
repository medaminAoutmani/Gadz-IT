import React, { useState } from 'react';
import ScrollToTop from '../components/home_page_AL/scroll/ScrollToTop';
import HeaderAL from '../components/home_page_AL/HeaderAL';
//import NavigationBar from '../components/home_page_AL/Navigation_bar';
import FooterAL from '../components/home_page_AL/FooterAL';
import QuickChat from '../components/home_page_AL/QuickChat';
import MainPageAL from '../components/home_page_AL/MainPageAL';

import { StyledEngineProvider } from '@mui/material/styles';


const HomePageAL = () => {
  const [isWhiteMode, setIsWhiteMode] = useState(false);
  const [isSideBarActive, setIsSideBarActive] = useState(false);
  const [navigatePage, setNavigatePage] = useState('Project');

  const handleToggleWhiteMode = () => {
    setIsWhiteMode(prevState => !prevState);
  };

  const handleToggleSideBarActive = () => {
    setIsSideBarActive(prevState => !prevState);
  };

  return (
    <div className={`flex flex-row w-full absolute text-left text-[17px] font-[Inter] overflow-hidden whitespace-normal grow-[1] shrink-[1] ${isWhiteMode ? 'bg-[#f8fafc] text-[#1e293b]' : 'bg-[#0f0e11] text-[#fff]'}`}>

      <div className="flex flex-row w-full">
        <div className="flex relative flex-col w-full xl:mr-[56.8px]">
          <HeaderAL
            onToggleWhiteMode={handleToggleWhiteMode}
            onToggleSideBarActive={handleToggleSideBarActive}
            isWhiteMode={isWhiteMode}
          />
          <MainPageAL isWhiteMode={isWhiteMode} />
        </div>
        <QuickChat isWhiteMode={isWhiteMode} />
      </div>

      <ScrollToTop />
    </div>
  );
};

export default HomePageAL;