import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectHome.css'
import asset_12gt from '../../../assets/asset-12gt-1@2x.png';
import asset_22gt from '../../../assets/asset-22-1@2x.png';
import Button from '@mui/material/Button';

function useComponentWidth(ref) {
  const [width, setWidth] = useState(0);


  useEffect(() => {
    function updateWidth() {
      setWidth(ref.current.offsetWidth);
    }

    window.addEventListener('resize', updateWidth);
    updateWidth(); // Initial check

    return () => window.removeEventListener('resize', updateWidth);
  }, [ref]);

  return width;
}


function ProjectHome() {
  const navigate = useNavigate();

  const handleNavigateCreateProject = () => {
    navigate('/home/dashboards/project/create-project');
  };

  const handleNavigateCreateTeam = () => {
    navigate('/home/dashboards/project/create-team');
  };



  return (

    <div class="flex relative overflow-x-hidden overflow-y-auto z-[1] grow-[1] w-full">
      <div class=" h-full w-full p-6">
        <div className={`grid w-full min-w-0 grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2`}>
          <div class="relative flex flex-col items-center justify-center gap-[20px] sm:gap-[40px] xl:gap-[50px] sm:min-h-[300px] md:min-h-[350px] h-full p-6 rounded-2xl border border-[#ab0cdf] md:left-0 lg:left-[40px] xl:left-[40px] 2xl:left-[40px]">
            <div class="relative text-[30px] sm:text-[40px] md:text-[50px] tracking-[-0.4px] leading-[50px] sm:leading-[60px] md:leading-[70px] font-extrabold text-center flex whitespace-normal">
              Start up your project!
            </div>
            <Button
              className='w-[100px] h-[30px] sm:w-[208px] sm:h-[65px] '
              variant="contained"
              style={{ textTransform: 'none' }}
              sx={{


                borderRadius: '999px',
                backgroundColor: 'var(--color-crimson-200)',
                fontSize: { xs: '13px', sm: '25px' },
                lineHeight: '16.5px',
                letterSpacing: '-0.4px',
                fontWeight: '400',
                transitionDuration: '300ms',
                '&:hover': {
                  backgroundColor: '#ff4081'
                }
              }}
              onClick={handleNavigateCreateProject}
            >
              New project
            </Button>
          </div>
          <div className='relative flex items-center justify-center lg:block  '>
            <img class="relative w-[623px] lg:w-[70%] h-auto top-[-80px] sm:top-[-90px] md:top-[-95px] lg:top-0 lg:left-[150px]" alt="" src={asset_22gt} />
          </div>
          <div class="relative flex flex-col items-center justify-center h-[200px] sm:h-[300px] lg:h-[350px] w-full lg:w-[69.51%] top-[-100px] lg:top-[50px] border border-[#ab0cdf] rounded-2xl p-6 lg:left-[-20px]">
            <div class="relative text-[30px] sm:text-[40px] md:text-[50px] tracking-[-0.4px] leading-[50px] sm:leading-[60px] md:leading-[70px] font-extrabold text-center flex whitespace-normal">
              Create your Team
            </div>
            <Button
              className='w-[100px] h-[30px] sm:w-[208px] sm:h-[65px] '
              variant="contained"
              style={{ textTransform: 'none' }}
              sx={{
                marginTop: { xs: '20px', sm: '30px' },
                borderRadius: '999px',
                backgroundColor: 'var(--color-crimson-200)',
                fontSize: { xs: '14px', sm: '25px' },
                lineHeight: '16.5px',
                letterSpacing: '-0.4px',
                fontWeight: '400',
                '&:hover': {
                  backgroundColor: '#ff4081'
                }
              }}
              onClick={handleNavigateCreateTeam}
            >
              New team
            </Button>
          </div>
          <div className='relative lg:w-[737.6px] lg:h-[400px] lg:left-[-220px] pb-[54%] top-[-30%] sm:top-[-20%] md:top-[-10%] lg:top-0'>
            <img
              className="absolute h-full w-full object-cover"
              alt=""
              src={asset_12gt}
            />
          </div>
        </div>
      </div>
    </div>
  )
}


export default ProjectHome;