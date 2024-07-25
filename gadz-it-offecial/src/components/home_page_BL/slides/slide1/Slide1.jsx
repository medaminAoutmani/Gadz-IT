import React, { Component } from 'react';
import logo from '../../../../public/logo-gadz-offeciel-2.svg'
import './Slide1.css'

class Slide1 extends Component {
  render() {
    return (
      <div>
        <div className="divsection-home-1">
          <div className="divsection-left-1">
            <div className="divgeneric-block-wrapper-1">
              <img
                className="image1-slide1"
                alt=""
                src="./image1-slide1-2.svg"
              />

              <div className="main-content">
                <div className="text-content">
                  <div className="divcolumns">
                    <div className="title-frame">
                      <div className="heading-1">Gadz’IT empowers you to</div>
                      <div className="heading-11">upskill teams</div>
                    </div>
                    <div className="description-frame">
                      <div className="heading-4">
                        Develop critical tech skills. Cut cycle times. Build
                        happier, healthier tech teams.
                      </div>
                      <div className="heading-41">
                        And innovate smarter with your team. All with Gadz’IT.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divgeneric-block">
                  <img
                    className="logo-1-1-icon"
                    alt=""
                    src={logo}
                  />

                  <div className="button-frame">
                    <button className="link" >
                      <div className="pseudomask-group">
                        <div className="pseudo"><b className="try-now">Try NOW</b></div>
                      </div>

                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Slide1;