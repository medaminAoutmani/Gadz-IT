import React, { useState, useRef, useEffect } from 'react';
import FullScreenButton from '../home_page_BL/FullScreen';

import SearchBar from '../home_page_BL/SearchBar';


import SearchIcon from '@mui/icons-material/Search';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';


import { StyledEngineProvider } from '@mui/material/styles';
import TemporaryDrawer from './Navigation_bar';



const HeaderAL = ({ onToggleWhiteMode, onToggleSideBarActive, isWhiteMode }) => {


  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isChangeButton, setIsChangeButton] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsSearchBarVisible(false);
    }
    console.log(ref.current)
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleSearch = (searchTerm) => {
    // Perform search logic here
    console.log('Search term:', searchTerm);
  };

  const handleButtonClick = () => {
    if (!isSearchBarVisible) {
      setIsSearchBarVisible(true);
    }
  };

  const handleButtonChange = () => {
    setIsChangeButton((prevState) => !prevState);
    console.log(isChangeButton);
  };

  const handleClick = () => {
    onToggleWhiteMode();
  };

  const handleClickSideBar = () => {
    onToggleSideBarActive();
  };

  return (
    <div className="w-full h-[60px] md:h-[70px] lg:h-[70px]  flex flex-col justify-start items-center ">
      <div className={`h-[60px] md:h-[70px] w-full flex self-stretch overflow-hidden flex-row items-center justify-end relative ${isWhiteMode ? 'shadow ' : 'border-b-[#ab0cdf] border-b-[0.8px]'} `}>
        <StyledEngineProvider injectFirst>
          <TemporaryDrawer />
        </StyledEngineProvider>
        <div className="h-full flex flex-1 flex-row items-end justify-end z-[1] overflow-hidden">
          <div className="h-full w-full flex flex-row items-center self-stretch justify-end gap-[25px] pr-[25px]">
            <div className={`flex items-center relative h-full ${isSearchBarVisible ? 'w-[320px]' : 'w-[40px]'} transition-all duration-1000 ease-in-out `}>
              <button
                ref={ref}
                onClick={handleButtonClick}
                className={` relative w-full h-[40px] flex items-center justify-end rounded-full pointer border-0 ${isWhiteMode ? 'bg-[#EAEAEA]' : 'bg-[#2b2830]'} px-2 my-[15px] mx-0 transition-all duration-1000 ease-in-out ${isSearchBarVisible ? '' : 'hover:bg-transparent hover:scale-110'} `}
              >
                <SearchBar onSearch={handleSearch} oppen={isSearchBarVisible} isWhiteMode={isWhiteMode} />
                <SearchIcon sx={{ width: '25px', height: '25px', padding: 'auto', color: `${isWhiteMode ? '#606f86' : '#c0bcca'}`, transitionDuration: '1s', '&:hover': { color: '#7806eb' } }} />
              </button>
            </div>

            <div className="flex items-center relative h-full w-[40px] ">
              <FullScreenButton isWhiteMode={isWhiteMode} />
            </div>

            <div className="flex items-center relative h-full w-[40px] ">
              <button
                onClick={handleClick}
                className={`relative w-full h-[40px] flex items-center justify-center rounded-full pointer border-0 ${isWhiteMode ? 'bg-[#EAEAEA]' : 'bg-[#2b2830]'} p-0 my-[15px] mx-0 duration-500 hover:bg-transparent hover:scale-110 `}
              >
                <LightModeOutlinedIcon sx={{ width: '23px', height: '23px', padding: 'auto', color: `${isWhiteMode ? '#606f86' : '#c0bcca'}`, transitionDuration: '1s', '&:hover': { color: '#7806eb' } }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAL;