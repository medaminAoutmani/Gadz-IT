import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './MainPageAL.css';
import CreateTeam from './CreateTeam';
import CreateProject from './CreateProject';

import brian_hughes from '../../assets/brianhughesjpg@2x.png';
import img_svg from '../../assets/img--svg.svg';

import messages from '../../assets/SVGmessages.svg';
import settings from '../../assets/Vectorsettings.svg';
import message_tasks from '../../assets/SVGmessage-tasks.svg';




class MainPageAL extends Component {


  constructor(props) {
    super(props);
    this.state = {
      toggleState: "home",
    };
  }

  handleToggleTabClick = (index) => {
    this.setState({ toggleState:  index});
  };

  render() {

    const { toggleState } = this.state;

    return (
      <div class="divflex5">
                <div class="divbg-card">
                  <div class="divflex6">
                    <div class="divflexmargin2">
                      <div class="divflex7">
                        <div class="divflex8">
                          <div class="divflex-0">
                            <img
                              class="brian-hughesjpg-icon1"
                              alt=""
                              src={brian_hughes}
                            />
                          </div>
                          <div class="divflexmargin3">
                            <div class="userh2d-1823ff5a">
                              <div class="divtext-2xl">
                                <div class="welcome-back-brian">
                                  Welcome back, Brian!
                                </div>
                              </div>
                            </div>
                            <div className='divflexmargin-3'>
                            <img
                              class="alert-3"
                              alt=""
                              src={message_tasks}
                            />
                              <div className="you-have-messages-and-tasks">
                                  You have 2 messages and 15 new tasks
                                </div>
                            </div>
                          </div>
                        </div>
                        <div class="divflexmargin4">
                          <div class="divflex2">
                            <div class="button3">
                              <img
                                class="img-svg2"
                                alt=""
                                src={messages}
                              />

                              <div class="spanmdc-button-label">
                                <div class="messages">Messages</div>
                              </div>
                            </div>
                            <div class="buttonmargin">
                              <div class="button4">
                                <img
                                  class="img-svg2"
                                  alt=""
                                  src={settings}
                                />

                                <div class="spanmdc-button-label1">
                                  <div class="messages">Settings</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="divflex-automargin">
                  <div class="divflex-auto">
                    <div class="divw-full2">
                      <div class="mat-tab-group">
                        <div class="mat-tab-header">
                          <div class="divmat-mdc-tab-label-containe">
                            <div class="tablist">
                              <div class="divmat-mdc-tab-labels">
                                <button 
                                  className={`tab1 ${toggleState === 'home' ? 'active' : ''}`}
                                  onClick={() => this.handleToggleTabClick('home')}
                                >
                                  <div class="spanmdc-tab-content">
                                    <div class="spanmdc-tab-text-label">
                                      <div class="messages">Home</div>
                                    </div>
                                  </div>
                                  <div class="spanmdc-tab-indicator"></div>
                                </button>
                                <button
                                  className={`tab1 ${toggleState === 'team' ? 'active' : ''}`}
                                  onClick={() => this.handleToggleTabClick('team')}
                                >
                                  <div class="spanmdc-tab-content1">
                                    <div class="spanmdc-tab-text-label1">
                                      <div class="spaninline-flex">
                                        <div class="spanh2d-2cadc47d">
                                          <div class="messages">Team</div>
                                        </div>
                                        <div class="spanpx-2margin">
                                          <div class="spanpx-2">
                                            <div class="div2">0</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {toggleState === 'home' ? <CreateProject/> : null}
                        {toggleState === 'team' ? <CreateTeam/> : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    )
  }
}

export default MainPageAL;