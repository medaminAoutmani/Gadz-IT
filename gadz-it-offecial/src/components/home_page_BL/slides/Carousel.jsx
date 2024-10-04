import './Carousel.css';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Carousel = ({ slides, autoSlideInterval, isWhiteMode, activeIndex, setActiveIndex }) => {

  const [disableNavigation, setDisableNavigation] = useState(false);


  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (!disableNavigation) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    }, autoSlideInterval);

    return () => {
      clearInterval(slideInterval);
    };
  }, [slides.length, autoSlideInterval, disableNavigation]);

  const updateIndex = (index) => {
    if (index < 0) {
      setDisableNavigation(true);
      setActiveIndex(slides.length - 1);
      setTimeout(() => {
        setActiveIndex(slides.length - 1);
        setDisableNavigation(false);
      }, 15000); // Delay of 15 seconds (15000 milliseconds)
    } else if (index >= slides.length) {
      setDisableNavigation(true);
      setActiveIndex(0);
      setTimeout(() => {
        setActiveIndex(0);
        setDisableNavigation(false);
      }, 15000);
    } else {
      setDisableNavigation(true);
      setActiveIndex(index);
      setTimeout(() => {
        setActiveIndex(index);
        setDisableNavigation(false);
      }, 15000);
    };
  };




  return (
    <>
      <button
        className="flex items-center justify-center "
        style={{ color: 'white' }}
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        <span className="material-symbols-outlined w-[18px]">arrow_back_ios</span>
      </button>
      <div className="w-full xl:max-w-[80%] h-full overflow-hidden ">
        <div
          className="flex flex-row w-full h-[calc(100%-50px)] transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-none h-full w-full"
            >
              {slide}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center ">

          <div className="indicators">
            {slides.map((slide, index) => (
              <button
                key={index}
                className={`indicator-buttons ${index === activeIndex ? 'indicator-symbol-active' : 'indicator-symbol'
                  }`}
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span className="material-symbols-outlined">radio_button_checked</span>
              </button>
            ))}
          </div>

        </div>
      </div>
      <button
        className="flex items-center justify-center "
        style={{ color: 'white' }}
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>
    </>
  );
};

export default Carousel;