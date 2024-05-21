import React, { Component } from 'react'
import './CreateTeam.css';

import asset_12gt from '../../assets/asset-12gt-1@2x.png';




class CreateTeam extends Component {
  render() {
    return (
      <div class="divmat-mdc-tab-body-wrapper">
        <div class="tabpanel">
          <div class="divmat-mdc-tab-body-content">
            <div class="divgrid">
              <div class="divflex11">
                <div class="frame-div">
                  <div
                    class="you-dont-have-a-team-create-parent"
                  >
                    <div class="you-dont-have">
                      You Don't Have a Team? Create
                    </div>
                    <div class="one">One!</div>
                    <div class="a-guide-to">
                      A Guide to Building Your Dream Project
                      Team
                    </div>
                  </div>
                  <div class="link1-item-child">
                    <div className='link1-item'>
                      <div class="new-team">New Team</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="you-dont-have-a-team-create-parent">
                <img
                  class="asset-1-2-gt-1"
                  alt=""
                  src={asset_12gt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateTeam;