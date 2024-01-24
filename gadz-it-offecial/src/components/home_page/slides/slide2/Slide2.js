import React, { Component } from 'react';
import './Slide2.css'
import asset from '../../../../public/asset-slide2.svg';
import htmlph from '../../../../public/photo@2x.png';
import cssph from '../../../../public/photo2@2x.png';
import cpp from '../../../../public/photo1@2x.png';

class Slide2 extends Component {
  render() {
    return (
      <div className="divsection-home-2">
        <div className="divsection-left-2">
          <div className="divgeneric-block-wrapper-2">
            <div className="frame10">
              <img className="asset-41-11" alt="" src={asset} />
            </div>
            <div className="frame11">
              <div className="frame12">
                <div className="divgeneric-block1">
                  <button className="link1">
                    <div className="pseudomask-group1">
                      <div className="pseudo1"></div>
                    </div>
                    <b className="try-now1">Try NOW</b>
                  </button>
                  <div className="divgeneric-block-inner">
                    <div className="link-python-inkypng-parent">
                      <button className="link-python-inkypng"></button>
                      <button className="link-html-inkypng">
                        <img className="photo-icon" alt="uoui" src={htmlph} />
                      </button>
                      <button className="link-c-inkypng">
                        <img className="photo-icon" alt="8787" src={cpp} />
                      </button>
                      <button className="link-html-inkypng1">
                        <img className="photo-icon" alt="" src={cssph} />
                      </button>
                    </div>
                  </div>
                  <div className="heading-2-popular-pluralsigh-parent">
                    <div className="heading-2">Popular Gadz’IT</div>
                    <div className="heading-21">Skills topics to</div>
                    <div className="heading-22">learn now</div>
                  </div>
                </div>
              </div>
              <div className="divcolumns1">
                <div className="heading-12">Gadz’IT empowers you to</div>
                <div className="heading-13">upskill teams</div>
                <div className="heading-42">
                  Develop critical tech skills. Cut cycle times. Build happier,
                  healthier tech teams.
                </div>
                <div className="heading-43">
                  And innovate smarter with your team. All with Gadz’IT.
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    )
  }
}

export default Slide2;