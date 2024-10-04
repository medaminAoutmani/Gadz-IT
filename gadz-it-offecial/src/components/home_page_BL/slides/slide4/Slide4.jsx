import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../../utils/motion";
import SplitStringComponent from '../../../../utils/SplitStringComponent';

import background from '../../../../public/background-slides.png'
import curve from '../../../../assets/curve.png'

import gadzLogo from '../../../../public/logo-gadz-offeciel.svg';
import assetSlide4 from '../../../../public/asset-slide4.svg';
import useCustomHistory from '../../../login_page/CustomHistory';


const Slide4 = ({ isWhiteMode, activeIndex }) => {

  const { navigateTo } = useCustomHistory();

  const handleButtonClick = () => {
    navigateTo('/Login');
  };
  return (
    <motion.div
      initial={"hidden"}
      animate={activeIndex === 2 ? "visible" : "hidden"}
      className="relative h-full w-full flex aspect-[1536/909] text-center text-[56px] text-white "
    >
      <div className='relative h-full w-full flex items-center justify-center'>
        <div className=" relative flex items-center w-full h-full overflow-hidden bg-top bg-no-repeat bg-cover rounded-3xl mt-1 " style={{ backgroundImage: `${isWhiteMode ? '' : `url(${background})`}`, }}>
          <div className="relative flex flex-col items-center w-[70%] lg:h-[80%] xl:h-[90%] lg:gap-[2vw] p-4 ml-12">

            <motion.div
              variants={slideInFromTop}
              className="relative flex flex-col lg:w-full xl:w-[80%] text-[3.5vw] lg:text-[3vw] leading-[4.4vw] lg:leading-[4vw] whitespace-normal"
            >
              <div className='w-full whitespace-nowrap'>Ready to unlock the power of the</div>{` `}
              <div>
                <span className="inline-block relative w-fit h-fit whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#d68485] via-[#c05ad6]  to-[#7614fb]">
                  Gadz'IT{"  "}
                  <img
                    src={curve}
                    className="absolute left-0 w-full xl:-mt-2"
                    width={624}
                    height={28}
                    alt="Curve"
                  />

                </span>
                {` `}platform?
              </div>
            </motion.div>
            <motion.div
              className="relative lg:w-[75%] xl:w-[90%] text-[1.5vw] leading-[3vw] mt-[1.5vw]"
              initial={'hidden'}
              whileInView={'reveal'}
              transition={{ staggerChildren: .02 }}
            >
              <SplitStringComponent
                inputString={`Let's get started now if you're already a member of our exclusive
              club!`}
              />
            </motion.div>
            <div className='relative flex flex-col w-full xl:mt-[-20px] '>
              <motion.img
                variants={slideInFromLeft(0.8)}
                className="relative lg:w-[60%] xl:w-[50%] h-[100%] left-0 "
                alt=""
                src={gadzLogo}
              />
            </div>
            <div className='relative flex flex-col items-end justify-center w-full lg:gap-3 xl:gap-4'>
              <motion.button
                variants={slideInFromRight(1)}
                className=" relative w-[45%] lg:w-[30%] xl:w-[15vw] h-[40%] lg:h-[5vw] xl:h-[4vw] lg:mt-[4vw] xl:mt-0 lg:mr-[6vw] xl:mr-0  lg:text-[2.6vw] leading-[2vw] uppercase text-[#c0bcca] font-semibold font-[Khand] shadow-[#884281] shadow-lg hover:shadow-md hover:shadow-[#c05ad6] bg-gradient-to-r from-[#d68485] via-[#c05ad6]  to-[#7614fb] text-center rounded-2xl hover:from-[#D86D82] hover:via-[#B04CD4] hover:to-[#4912d3] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2  focus:ring-pink-300"
                onClick={handleButtonClick}
              >
                GET STARTED
              </motion.button>
              <motion.div
                variants={slideInFromRight(1.3)}
                className="relative w-[50%] text-[1.05vw] xl:mr-[-100px]"
              >
                Registration reserved exclusively for club members.
              </motion.div>
            </div>
          </div>
        </div>
        <img className="absolute top-[8.18%] lg:left-[70%] xl:left-[75%] xl:w-[21.5%] lg:h-[90%] xl:h-[85.5%] " alt="" src={assetSlide4} />

      </div>
    </motion.div>
  )
}


export default Slide4