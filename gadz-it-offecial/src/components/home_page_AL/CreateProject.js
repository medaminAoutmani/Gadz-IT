import React, {useState, useRef, useEffect} from 'react'
import './CreateProject.css'
import asset_12gt from '../../assets/asset-12gt-1@2x.png';
import asset_22gt from '../../assets/asset-22-1@2x.png';

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


function CreateProject() {

  const componentRef = useRef(null);
  const width = useComponentWidth(componentRef);

  return (
    
      <div class="divmat-mdc-tab-body-wrapper1">
        <div class="tabpanel1">
          <div class="divmat-mdc-tab-body-content1">
            <div ref={componentRef} className={width < 1350 ? 'divgrid2' : 'divgrid1'}>
              <div class="divflex34">
                <div class="start-up-your">Start up your project!</div>
                <div className='limk10-parent'>
                  <button class="link10">
                    <div class="new-project">New project</div>
                  </button>
                </div>
              </div>
              <img class="asset-2-2-1" alt="" src={asset_22gt} />
              <div class="divflex33">
                <div class="create-your">Create your</div>
                <div class="team1">Team</div>
                <div className='limk9-parent'>
                  <button class="link9">
                    <div class="new-team1">New Team</div>
                  </button>
                  </div>
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


export default CreateProject;