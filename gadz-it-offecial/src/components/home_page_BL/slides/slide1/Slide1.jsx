import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../../utils/motion";

import Typewriter from '../../../../utils/Typewriter';

import logo from '../../../../public/logo-gadz-offeciel-2.svg'
import background from '../../../../public/background-slides.png'
import curve from '../../../../assets/curve.png'
import SplitStringComponent from '../../../../utils/SplitStringComponent';

const Slide1 = ({ isWhiteMode, activeIndex }) => {

  const phrases = ["upskill teams", "drive innovation", "boost collaboration", "achieve excellence"];

  return (
    <motion.div
      initial={"hidden"}
      animate={activeIndex === 0 ? "visible" : "hidden"}
      className="relative h-full w-full flex aspect-[1536/909] text-center text-[56px] text-white font-[Inter] "
    >
      <div className="relative h-full w-full flex items-center justify-center">
        <div className=" relative w-full h-full overflow-hidden bg-top bg-no-repeat bg-cover rounded-3xl mt-1" style={{ backgroundImage: `${isWhiteMode ? '' : `url(${background})`}`, }}>
          <motion.img
            /*variants={slideInFromRight(0.8)}*/
            className="absolute sm:relative bottom-0 sm:bottom-auto top-auto sm:top-[34%] md:top-[30%] lg:top-[10%] xl:top-0 right-0 sm:left-[40%] lg:left-[46%] xl:left-[48.434%] w-[80vw] xs:w-[70vw] sm:w-[60%] lg:w-[55%] xl:w-[51.578%] md:h-[70%] lg:h-[86%] xl:h-full "
            alt=""
            src="./image1-slide1-2.svg"
          />

          <div className="absolute top-0 left-[0.75%] w-[92.897%] h-[99.981%] ">
            <div className="h-full w-[66.177%]">
              <div className="absolute top-0 h-[44.973%] w-full">
                <div className="relative top-[26%] lg:top-[16.759%] xs:left-[12%] lg:left-[4.589%] w-[100%] xs:w-[60%] lg:w-[57.015%] h-[37.669%] ">
                  <motion.div
                    className=" absolute flex flex-col xs:left-[55%] lg:left-0 w-full h-full text-[7vw] xs:text-[4.5vw] lg:text-[2.9167vw] leading-[8vw] xs:leading-[5vw] lg:leading-[3.5vw] "
                    variants={slideInFromTop}
                  >
                    <div className='whitespace-nowrap md:whitespace-normal'>
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
                </div>
                <motion.div
                  variants={slideInFromLeft(0.5)}
                >
                  <motion.div
                    className=" absolute top-[50%] xs:top-[70%] sm:top-[90%] lg:top-[57.13%] left-[1.9%] lg:left-[1.684%] xs:w-[70%] sm:w-[53%] lg:w-[69.466%] h-[16.91%] text-[2vw] lg:text-[1.1917vw] md:leading-[2.5vw] lg:leading-[2vw] "
                    initial={'hidden'}
                    whileInView={'reveal'}
                    transition={{ staggerChildren: .02 }}
                  >
                    <SplitStringComponent
                      inputString={`Develop critical tech skills. Cut cycle times. Build
                  happier, healthier tech teams.
                  And innovate smarter with your team. All with Gadz’IT.`}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <div className="absolute w-full h-[66.367%] lg:h-[66.367%] top-[25%] xs:top-[5%] lg:top-[33.634%]  ">
              <motion.img
                variants={slideInFromLeft(0.8)}
                className="relative w-[40%] lg:w-[47.5%] h-[30%] lg:h-[57.967%] mt-[11.3px] ml-[30%] xs:ml-[20.5px] "
                alt=""
                src={logo}
              />

              <motion.div
                variants={slideInFromLeft(1)}
                className="absolute top-[45%] xs:top-[75%] lg:top-[69.493%] xs:left-[5%] sm:left-[15%] lg:left-[17.072%] w-[30%] xs:w-[30%] sm:w-[24.608%] h-[15.256%] "
              >
                <button className=" w-[80%] lg:w-[70%] h-[70%] lg:h-[80%] text-[2.6042vw] leading-[2vw] uppercase text-[#c0bcca] font-semibold font-[Khand] shadow-[#884281] shadow-lg hover:shadow-md hover:shadow-[#c05ad6] bg-gradient-to-r from-[#d68485] via-[#c05ad6]  to-[#7614fb] text-center rounded-2xl hover:from-[#D86D82] hover:via-[#B04CD4] hover:to-[#4912d3] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2  focus:ring-pink-300" >
                  Try Now
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

  )

}

export default Slide1;