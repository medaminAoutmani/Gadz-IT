import React, { Component } from 'react';
import './Slide4.css';
import gadzLogo from '../../../../public/logo-gadz-offeciel.svg';
import assetSlide4 from '../../../../public/asset-slide4.svg'

class Slide4 extends Component {
  render() {
    return (
      <div class="divgeneric-block-wrapper4">
      <div class="divgeneric-block4">
        <img
          class="divgeneric-block-child4"
          alt=""
          src={gadzLogo}
        />

        <button class="link4">
          <div class="pseudo4-1"></div>
          <div class="pseudomask-group4">
            <div class="pseudo4-2"></div>
          </div>
          <b class="get-started">GET STARTED</b>
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
}

export default Slide4