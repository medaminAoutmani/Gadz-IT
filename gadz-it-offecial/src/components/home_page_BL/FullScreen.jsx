import React, {useState} from 'react';
import full_screen from '../../assets/SVGfull-screen.svg';
import divBarIem2 from '../../public/divbar-exit-full-screen-item.svg';



import '../home_page_AL/HeaderAL.css'

function FullScreenButton() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    if (!isClicked){
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
    <button className='link-item' onClick={handleClickAndFullScreen}>
      {isClicked ?
        <img
          className="svg-icon22"
          alt="clicked"
          src={full_screen} 
       />
        :
        <img
          className="svg-icon22"
          alt="clicked"
          src={divBarIem2} 
       />
      }
    </button>
  );
}

export default FullScreenButton;