import React, { Component } from 'react'
import './Home.css';
import imageSlide1 from '../../public/image1-slide1-2.svg';
import logo1 from '../../public/logo-1-1@2x-2.svg';


class Home extends Component {
  render() {
    return (
      <div className="divsection-home">
        <div className="divsection-left">
          <div className="divgeneric-block-wrapper">
            <img
               className="image1-slide1"
               alt=""
               src={imageSlide1}
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
                  src={logo1}
                />

                <div className="button-frame">
                  <button className="link">
                    <div className="pseudomask-group">
                      <div className="pseudo"></div>
                    </div>
                    <b className="try-now">Try NOW</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;