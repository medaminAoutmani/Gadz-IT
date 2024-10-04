import React, { useState } from 'react';
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../../utils/motion";
import Typewriter from '../../../../utils/Typewriter';
import SplitStringComponent from '../../../../utils/SplitStringComponent';

import background from '../../../../public/background-slides.png'
import curve from '../../../../assets/curve.png'

import asset from '../../../../public/asset-slide2.svg';
import htmlph from '../../../../public/photo@2x.png';
import cssph from '../../../../public/photo2@2x.png';
import cpp from '../../../../public/photo1@2x.png';
import python from '../../../../public/linkpythoninkypng@2x.png'

const Slide2 = ({ isWhiteMode, activeIndex }) => {

  const phrases = ["upskill teams", "drive innovation", "boost collaboration", "achieve excellence"];

  return (
    <motion.div
      initial={"hidden"}
      animate={activeIndex === 1 ? "visible" : "hidden"}
      className="relative h-full w-full flex aspect-[1536/909] text-center text-[56px] text-white "
    >
      <div className="relative h-full w-full flex items-center justify-center">
        <div className=" relative w-full h-full overflow-hidden bg-top bg-no-repeat bg-cover rounded-3xl mt-1" style={{ backgroundImage: `${isWhiteMode ? '' : `url(${background})`}`, }}>
          <motion.img
            /*variants={slideInFromRight(0.8)}*/
            className="relative w-[75%] lg:w-[60%] xl:w-[60%] h-[100%] lg:h-[95%] xl:h-[90%] top-[8%] lg:top-[12%] xl:top-[15%] left-[27%] lg:left-[38%] xl:left-[40%]"
            alt=""
            src={asset}
          />
          <div className="absolute flex flex-col justify-start lg:justify-between top-0 w-full h-full">
            <div className="relative flex flex-col items-center justify-center w-[66%] h-[35%] sm:top-[-2%] lg:top-[-1%] xl:top-0 left-[13%] gap-4">
              <motion.div
                variants={slideInFromTop}
                className="relative flex flex-col w-[80%] lg:w-[70%] text-[3.5vw] lg:text-[3vw] leading-[4.4vw] lg:leading-[4vw]"
              >
                <div>
                  <span className="inline-block relative w-fit h-fit whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#d68485] via-[#c05ad6]  to-[#7614fb]">
                    Gadz'IT{` `}
                    <img
                      src={curve}
                      className="absolute left-0 w-full xl:-mt-2"
                      width={624}
                      height={28}
                      alt="Curve"
                    />

                  </span>
                  {` `} empowers you to
                </div>
                <div className='w-full text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'><Typewriter phrases={phrases} /></div>
              </motion.div>
              <motion.div
                variants={slideInFromLeft(0.5)}
              >
                <motion.div
                  className="relative flex w-[90%] lg:w-[80%] h-[20%] text-[1.5vw] lg:text-[1.3vw] xl:text-[1.2vw] leading-[1.9vw] xl:leading-[1.8vw]"
                  initial={'hidden'}
                  whileInView={'reveal'}
                  transition={{ staggerChildren: .02 }}
                >
                  <SplitStringComponent
                    inputString={`Develop critical tech skills. Cut cycle times. Build happier,
                healthier tech teams. And innovate smarter with your team. All with Gadz’IT.`}
                  />

                </motion.div>
              </motion.div>
            </div>
            <div className="relative flex flex-col items-center justify-center md:justify-start w-[40%] lg:w-[45%] h-[40%] lg:h-[60%] md:gap-5 lg:gap-4 md:ml-4">
              <motion.div
                className="flex relative w-[80%] lg:w-[65%] xl:w-[60%] text-[Khand] text-[2.5vw] lg:text-[2vw] leading-[2.9vw] lg:leading-[2.6vw] "
                variants={slideInFromLeft(0.8)}
              >
                Popular Gadz’IT skills topics to learn now
              </motion.div>
              <div className="relative w-full ">
                <div className="relative flex flex-row items-center justify-center flex-wrap w-full gap-4 lg:gap-5 xl:gap-6">
                  <motion.button
                    variants={slideInFromLeft(1)}
                    className="relative w-[70px] lg:w-[90px] xl:w-[100px] h-[70px] lg:h-[90px] xl:h-[100px]"
                  >
                    <img className="relative w-full h-full" alt="uoui" src={python} />
                  </motion.button>
                  <motion.button
                    variants={slideInFromLeft(1.1)}
                    className="relative flex items-center justify-center w-[70px] lg:w-[90px] xl:w-[100px] h-[70px] lg:h-[90px] xl:h-[100px] bg-[#353065] rounded-xl"
                  >
                    <img className="relative w-[80%] h-[80%] bottom-[-5px]" alt="uoui" src={htmlph} />
                  </motion.button>
                  <motion.button
                    variants={slideInFromLeft(1.2)}
                    className="relative flex items-center justify-center w-[70px] lg:w-[90px] xl:w-[100px] h-[70px] lg:h-[90px] xl:h-[100px] bg-[#353065] rounded-xl"
                  >
                    <img className="relative w-[80%] h-[80%] bottom-[-5px]" alt="8787" src={cpp} />
                  </motion.button>
                  <motion.button
                    variants={slideInFromLeft(1.3)}
                    className="relative flex items-center justify-center w-[70px] lg:w-[90px] xl:w-[100px] h-[70px] lg:h-[90px] xl:h-[100px] bg-[#353065] rounded-xl"
                  >
                    <img className="relative w-[80%] h-[80%] bottom-[-5px]" alt="" src={cssph} />
                  </motion.button>
                </div>
              </div>
              <motion.button
                variants={slideInFromLeft(1.5)}
                className=" lg:relative md:absolute md:top-[115%] lg:top-0 md:left-[170%] lg:left-0  mt-4 lg:mt-10 w-[45%] lg:w-[40%] h-[20%] lg:h-[14%] text-[2.6042vw] leading-[2vw] uppercase text-[#c0bcca] font-semibold font-[Khand] shadow-[#884281] shadow-lg hover:shadow-md hover:shadow-[#c05ad6] bg-gradient-to-r from-[#d68485] via-[#c05ad6]  to-[#7614fb] text-center rounded-2xl hover:from-[#D86D82] hover:via-[#B04CD4] hover:to-[#4912d3] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2  focus:ring-pink-300"
              >
                Try Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Slide2;