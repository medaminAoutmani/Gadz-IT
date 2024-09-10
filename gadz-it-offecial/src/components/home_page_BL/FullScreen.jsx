import React, { useState } from 'react';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';




function FullScreenButton({ isWhiteMode }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  const handleFullScreen = () => {
    if (!isFullScreen) {
      enterFullScreen();

    } else {
      exitFullScreen();
    }
  };

  const handleClickAndFullScreen = () => {
    handleClick();
    handleFullScreen();
  };

  const enterFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }

    setIsFullScreen(true);

  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    setIsFullScreen(false);
  };

  return (
    <button className={`relative w-full h-[40px] flex items-center justify-center rounded-full pointer border-0 ${isWhiteMode ? ' bg-[#EAEAEA]' : 'bg-[#2b2830]'} p-0 my-[15px] mx-0 duration-500 hover:bg-transparent hover:scale-110 `} onClick={handleClickAndFullScreen}>
      {isClicked ?
        <FullscreenOutlinedIcon sx={{ width: '30px', height: '30px', padding: 'auto', color: `${isWhiteMode ? '#606f86' : '#c0bcca'}`, transitionDuration: '1s', '&:hover': { color: '#7806eb' } }} />
        :
        <FullscreenExitOutlinedIcon sx={{ width: '30px', height: '30px', padding: 'auto', color: `${isWhiteMode ? '#606f86' : '#c0bcca'}`, transitionDuration: '1s', '&:hover': { color: '#7806eb' } }} />
      }
    </button>
  );
}

export default FullScreenButton;