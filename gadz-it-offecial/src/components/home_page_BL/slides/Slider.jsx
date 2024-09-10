import React from 'react';
import Slide1 from './slide1/Slide1';
import Slide2 from './slide2/Slide2';
import Slide4 from './slide4/Slide4';
import Carousel from './Carousel';



function Slider({ isWhiteMode }) {

  const slides = [
    <Slide1 isWhiteMode={isWhiteMode} />,
    <Slide2 isWhiteMode={isWhiteMode} />,
    <Slide4 isWhiteMode={isWhiteMode} />
  ]

  return (
    <div className={`relative flex items-center justify-center h-full w-full text-center text-[56px] font-[Inter] ${isWhiteMode ? 'bg-[#f8fafc]' : 'bg-[#100E1A] '} lg:pb-6`}>
      <Carousel slides={slides} autoSlideInterval={5000} isWhiteMode={isWhiteMode} />
    </div>
  )
}

export default Slider