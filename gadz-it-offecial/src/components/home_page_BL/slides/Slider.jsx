import React from 'react';
import Slide1 from './slide1/Slide1';
import Slide2 from './slide2/Slide2';
import Slide4 from './slide4/Slide4';
import Carousel from './Carousel';



function Slider({ isWhiteMode, activeIndex, setActiveIndex, }) {

  const slides = [
    <Slide1 isWhiteMode={isWhiteMode} activeIndex={activeIndex} />,
    <Slide2 isWhiteMode={isWhiteMode} activeIndex={activeIndex} />,
    <Slide4 isWhiteMode={isWhiteMode} activeIndex={activeIndex} />
  ]


  return (
    <div className={`relative flex items-center justify-center h-full w-full text-center text-[56px] font-[Inter] ${isWhiteMode ? 'bg-[#f8fafc]' : 'bg-[#100E1A] '} lg:pb-6 xl:gap-10`}>
      <Carousel slides={slides} autoSlideInterval={8000} isWhiteMode={isWhiteMode} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  )
}

export default Slider