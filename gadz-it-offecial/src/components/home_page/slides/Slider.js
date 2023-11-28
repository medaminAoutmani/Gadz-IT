import React from 'react';
import './slider.css'
import Slide1 from './slide1/Slide1';
import Slide2 from './slide2/Slide2';
import Slide4 from './slide4/Slide4';
import Carousel from './Carousel';

const slides = [
  <Slide1/>,
  <Slide2/>,
  <Slide4 />
]

function Slider() {
  return (
    <div className='parent'>
        <Carousel slides={slides} autoSlideInterval={5000} />
      </div>
  )
}

export default Slider