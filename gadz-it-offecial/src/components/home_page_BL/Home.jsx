import React, { useState } from 'react';
import Slider from './slides/Slider';


const Home = ({ isWhiteMode }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Slider isWhiteMode={isWhiteMode} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
  )
}

export default Home;