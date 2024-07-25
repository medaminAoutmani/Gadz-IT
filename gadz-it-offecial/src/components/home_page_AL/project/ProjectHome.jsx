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
  const componentRef = useRef(null);
  const width = useComponentWidth(componentRef);

  const handleNavigateCreateProject = () => {
    navigate('/home/dashboards/project/create-project');
  };

  const handleNavigateCreateTeam = () => {
    navigate('/home/dashboards/project/create-team');
  };



  return (

    <div class="divmat-mdc-tab-body-wrapper1">
      <div class="tabpanel1">
        <div class="divmat-mdc-tab-body-content1">
          <div ref={componentRef} className={width < 1350 ? 'divgrid2' : 'divgrid1'}>
            <div class="divflex34">
              <div class="start-up-your">Start up your project!</div>
              <Button
                variant="contained"
                style={{ textTransform: 'none' }}
                sx={{
                  width: '208px',
                  height: '65px',
                  borderRadius: '999px',
                  backgroundColor: 'var(--color-crimson-200)',
                  fontSize: 'var( --font-size-6xl)',
                  lineHeight: '16.5px',
                  letterSpacing: '-0.4px',
                  fontWeight: '400',
                  '&:hover': {
                    backgroundColor: '#e9176d'
                  }
                }}
                onClick={handleNavigateCreateProject}
              >
                New project
              </Button>
            </div>
            <img class="asset-2-2-1" alt="" src={asset_22gt} />
            <div class="divflex33">
              <div class="create-your">Create your</div>
              <div class="team1">Team</div>
              <Button
                variant="contained"
                style={{ textTransform: 'none' }}
                sx={{
                  width: '208px',
                  height: '65px',
                  marginTop: '50px',
                  borderRadius: '999px',
                  backgroundColor: 'var(--color-crimson-200)',
                  fontSize: 'var( --font-size-6xl)',
                  lineHeight: '16.5px',
                  letterSpacing: '-0.4px',
                  fontWeight: '400',
                  '&:hover': {
                    backgroundColor: '#e9176d'
                  }
                }}
                onClick={handleNavigateCreateTeam}
              >
                New team
              </Button>
            </div>
            <img
              class="asset-1-2-gt-11"
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