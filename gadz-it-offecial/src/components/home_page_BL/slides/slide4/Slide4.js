import React from 'react';
import './Slide4.css';
import gadzLogo from '../../../../public/logo-gadz-offeciel.svg';
import assetSlide4 from '../../../../public/asset-slide4.svg';
import useCustomHistory from '../../../login_page/CustomHistory';


const Slide4 = () => {
  
    const { navigateTo } = useCustomHistory();

  const handleButtonClick = () => {
    navigateTo('/Login');
  };
    return (
      <div class="divgeneric-block-wrapper-4">
      <div class="divgeneric-block4">
        <img
          class="divgeneric-block-child4"
          alt=""
          src={gadzLogo}
        />
          <button class="link4" onClick={handleButtonClick} >
            <div class="pseudo4-1">
              <div class="pseudomask-group4">
                <div class="pseudo4-2">
                  <b class="get-started">GET STARTED</b>
                </div>
              </div>
            </div> 
          </button>
        <div class="heading-4-1">
          Ready to unlock the power of the Gadz'IT platform?
        </div>
        <div class="heading-4-2">
          Let's get started now if you're already a member of our exclusive
          club!
        </div>
        <div class="heading-4-3">
          Registration reserved exclusively for club members.
        </div>
      </div>
      <img class="asset-41-44" alt="" src={assetSlide4} />
    </div>
    )
  }


export default Slide4