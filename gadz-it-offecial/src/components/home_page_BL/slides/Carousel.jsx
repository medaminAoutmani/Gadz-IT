import './Carousel.css';
import React, { useState, useEffect } from 'react';

const Carousel = ({ slides, autoSlideInterval }) => {
  const [activeIndex, setActiveIndex] = useState(0);
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
      }, 10000); // Delay of 15 seconds (15000 milliseconds)
    } else if (index >= slides.length) {
      setDisableNavigation(true);
      setActiveIndex(0);
      setTimeout(() => {
        setActiveIndex(0);
        setDisableNavigation(false);
      }, 10000);
    } else {
      setDisableNavigation(true);
      setActiveIndex(index);
      setTimeout(() => {
        setActiveIndex(index);
        setDisableNavigation(false);
      }, 10000);
    }
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            {slide}
          </div>
        ))}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div className="indicators">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`indicator-buttons ${
                index === activeIndex ? 'indicator-symbol-active' : 'indicator-symbol'
              }`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              <span className="material-symbols-outlined">radio_button_checked</span>
            </button>
          ))}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;