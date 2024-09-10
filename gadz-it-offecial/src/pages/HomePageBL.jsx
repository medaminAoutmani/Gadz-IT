import React, { useState } from 'react';
import Home from '../components/home_page_BL/Home';
import Footer from '../components/home_page_BL/Footer';
import HeaderBL from '../components/home_page_BL/Header';

const HomePageBL = () => {
  const [isWhiteMode, setIsWhiteMode] = useState(false);

  const handleToggleWhiteMode = () => {
    setIsWhiteMode(prevState => !prevState);
  };

  return (
    <div className={`flex relative h-[100vh] xl:h-full w-full  text-sm font-[Heebo] ${isWhiteMode ? 'bg-[#f8fafc] text-[#1e293b]' : 'bg-[#0f0e11] text-[#7e7a86]'}`}>
      <div className="relative flex flex-col w-full h-full ">
        <HeaderBL
          onToggleWhiteMode={handleToggleWhiteMode}
          isWhiteMode={isWhiteMode}
        />
        <div className="relative flex flex-col overflow-hidden w-full h-[calc(100vh-70px)] xl:h-full">
          <Home
            isWhiteMode={isWhiteMode}
          />
          <Footer
            isWhiteMode={isWhiteMode}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePageBL;