import React, { Component } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation_bar.css';
import logosvg from '../../assets/logosvg.svg';
import profile from '../../assets/Vectorprofile-item.svg';
import profile_hover from '../../assets/Imgprofile-hover.svg';
import project from '../../assets/Imgproject.svg';
import analytics from '../../assets/Imganalytics.svg';
import formations from '../../assets/Imgformations.svg';
import chat from '../../assets/Imgchat.svg';
import contacts from '../../assets/Imgcontacts.svg';
import eCommerce from '../../assets/SVGe-commerce.svg';
import file_manager from '../../assets/SVGfile-manager.svg';
import help from '../../assets/Imghelp.svg';
import mailbox from '../../assets/Imgmailbox.svg';
import notes from '../../assets/SVGnotes.svg';
import scrumboard from '../../assets/Imgscrumboard.svg';
import tasks from '../../assets/Imgtasks.svg';
import activities from '../../assets/SVGactivities.svg';
import authentication from '../../assets/SVGauthentication.svg';
import coming from '../../assets/SVGcoming.svg';
import error from '../../assets/SVGerror.svg';
import more_off from '../../assets/SVGmore.svg';
import more_off_hover from '../../assets/SVGmore-hover.svg';

import project_hover from '../../assets/SVGproject-hover.svg';
import analytics_hover from '../../assets/SVGanalytics-hover.svg';
import formations_hover from '../../assets/SVGformation-hover.svg';
import chat_hover from '../../assets/SVGchat-hover.svg';
import contacts_hover from '../../assets/SVGcontacts-hover.svg';
import eCommerce_hover from '../../assets/SVGecommerce-hover.svg';
import file_manager_hover from '../../assets/SVGfile-manager-hover.svg';
import help_hover from '../../assets/SVGhelp-hover.svg';
import mailbox_hover from '../../assets/SVGmailbox-hover.svg';
import notes_hover from '../../assets/SVGnotes-hover.svg';
import scrumboard_hover from '../../assets/SVGscrumboard-hover.svg';
import tasks_hover from '../../assets/SVGtasks-hover.svg';
import activities_hover from '../../assets/SVGactivities-hover.svg';
import authentication_hover from '../../assets/SVGauthentication-hover.svg';
import coming_hover from '../../assets/SVGcoming-hover.svg';
import error_hover from '../../assets/SVGerror-hover.svg';



import alert from '../../assets/SVGalert.svg';
import svg from '../../assets/svg.svg';
import alert_hover from '../../assets/SVGalert-hover.svg';
import brian_hughes from '../../assets/brianhughesjpg@2x.png';





class NavigationBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      hoveredLink: null
    };
  }

  handleMouseEnter = (linkId) => {
    this.setState({ hoveredLink: linkId });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredLink: null });
  };

  render() {

    const { hoveredLink } = this.state;
    const defaultClassName = 'fuse-vertical-navigation-basic1-child-hovered';
    const hoveredClassName = 'fuse-vertical-navigation-basic1-child';
    
    return (
      <div class="fuse-vertical-navigation">
          <div class="divfuse-vertical-navigation-w">
            <div class="divfuse-vertical-navigation-c">
              <div class="divfuse-vertical-navigation-c1">
                <div class="divflex">
                  <div class="spanmdc-tab-text-label">
                    <div class="logosvg">
                      <div class="logosvg-fill">
                        <img
                          class="logosvg-icon"
                          alt=""
                          src={logosvg}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="divflexmargin">
                    <div class="divflex2-nav">
                      <div class="userh2d-1823ff5a">
                        <div class="button-item">
                          <img
                            class="img-svg"
                            alt=""
                            src={alert}
                          />
                          <img
                            class="img-svg-hover"
                            alt=""
                            src={alert_hover}
                          />

                          <div class="spanabsolute">
                            <div class="spanflex">
                              <div class="div">3</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="button1">
                          <div class="spanrelative">
                            <div class="img">
                              <img
                                class="img-svg"
                                alt=""
                                src={profile}
                              />
                              <img
                                class="img-svg-hover"
                                alt=""
                                src={profile_hover}
                              />
                            </div>
                            <div class="spanabsolute1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="divflex3">
                  <div class="divrelative">
                    <img
                      class="brian-hughesjpg-icon"
                      alt=""
                      src={brian_hughes}
                    />
                  </div>
                  <div class="divflexmargin1">
                    <div class="divflex4">
                      <div class="divw-full">
                        <div class="brian-hughes">Brian Hughes</div>
                      </div>
                      <div class="divw-fullmargin">
                        <div class="divw-full1">
                          <div class="hughesbriancompanycom">
                            hughes.brian@company.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fuse-vertical-navigation-group">
                <div class="divfuse-vertical-navigation-i">
                  <div class="divfuse-vertical-navigation-i1">
                    <div class="userh2d-1823ff5a">
                      <div class="divfuse-vertical-navigation-i3">
                        <div class="dashboards">Dashboards</div>
                      </div>
                      <div class="divfuse-vertical-navigation-i4">
                        <div class="unique-dashboard-designs">
                          Unique dashboard designs
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="fuse-vertical-navigation-basic">
                  <button
                    class="fuse-vertical-navigation-basic1"
                    id="fuseVerticalNavigationBasicContainer"
                  >
                    <div className={hoveredLink === 'project' ? defaultClassName : hoveredClassName} 
                          onMouseEnter={() => this.handleMouseEnter('project')}
                          onMouseLeave={this.handleMouseLeave}>
                      <div class="imgmargin">
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={project_hover} />
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="divfuse-vertical-navigation-i6">
                          <div class="project">Project</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div class="fuse-vertical-navigation-basic">
                  <button
                    class="fuse-vertical-navigation-basic1"
                    id="fuseVerticalNavigationBasicContainer"
                  >
                    <div className={hoveredLink === 'analytics' ? defaultClassName : hoveredClassName} 
                          onMouseEnter={() => this.handleMouseEnter('analytics')}
                          onMouseLeave={this.handleMouseLeave}>
                      <div class="imgmargin">
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={analytics_hover} />
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="divfuse-vertical-navigation-i6">
                          <div class="project">Analytics</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div class="fuse-vertical-navigation-group">
                <div class="divfuse-vertical-navigation-i">
                  <div class="divfuse-vertical-navigation-i1-app">
                    <div class="userh2d-1823ff5a">
                      <div class="divfuse-vertical-navigation-i3">
                          <div class="dashboards">Applications</div>
                      </div>
                      <div class="divfuse-vertical-navigation-i4">
                          <div class="unique-dashboard-designs">
                          Custom made application designs 
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="fuse-vertical-navigation-basic">
                  <button
                    class="fuse-vertical-navigation-basic1"
                    id="fuseVerticalNavigationBasicContainer"
                  >
                    <div className={hoveredLink === 'formations' ? defaultClassName : hoveredClassName} 
                          onMouseEnter={() => this.handleMouseEnter('formations')}
                          onMouseLeave={this.handleMouseLeave}>
                      <div class="imgmargin">
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={formations_hover} />
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="divfuse-vertical-navigation-i6">
                          <div class="project">Formations</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div class="fuse-vertical-navigation-basic">
                  <button
                    class="fuse-vertical-navigation-basic1"
                    id="fuseVerticalNavigationBasicContainer"
                  >
                    <div className={hoveredLink === 'chat' ? defaultClassName : hoveredClassName} 
                          onMouseEnter={() => this.handleMouseEnter('chat')}
                          onMouseLeave={this.handleMouseLeave}>
                      <div class="imgmargin">
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={chat_hover} />
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="divfuse-vertical-navigation-i6">
                          <div class="project">Chat</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div class="fuse-vertical-navigation-basic">
                  <button
                    class="fuse-vertical-navigation-basic1"
                    id="fuseVerticalNavigationBasicContainer"
                  >
                    <div className={hoveredLink === 'contacts' ? defaultClassName : hoveredClassName} 
                          onMouseEnter={() => this.handleMouseEnter('contacts')}
                          onMouseLeave={this.handleMouseLeave}>
                      <div class="imgmargin">
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={contacts_hover} />
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="divfuse-vertical-navigation-i6">
                          <div class="project">Contacts</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div class="fuse-vertical-navigation-basic">
                  <button
                    class="fuse-vertical-navigation-basic1"
                    id="fuseVerticalNavigationBasicContainer"
                  >
                    <div className={hoveredLink === 'eCommerce' ? defaultClassName : hoveredClassName} 
                          onMouseEnter={() => this.handleMouseEnter('eCommerce')}
                          onMouseLeave={this.handleMouseLeave}>
                      <div class="imgmargin">
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={eCommerce_hover} />
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="divfuse-vertical-navigation-i6">
                          <div class="project">ECommerce</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div class="fuse-vertical-navigation-basic">
                  <button
                    class="fuse-vertical-navigation-basic1"
                    id="fuseVerticalNavigationBasicContainer"
                  >
                    <div className={hoveredLink === 'file' ? defaultClassName : hoveredClassName} 
                          onMouseEnter={() => this.handleMouseEnter('file')}
                          onMouseLeave={this.handleMouseLeave}>
                      <div class="imgmargin">
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={file_manager_hover} />
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="divfuse-vertical-navigation-i6">
                          <div class="project">File Manager</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div class="fuse-vertical-navigation-basic">
                  <button
                    class="fuse-vertical-navigation-basic1"
                    id="fuseVerticalNavigationBasicContainer"
                  >
                    <div className={hoveredLink === 'help' ? defaultClassName : hoveredClassName} 
                          onMouseEnter={() => this.handleMouseEnter('help')}
                          onMouseLeave={this.handleMouseLeave}>
                      <div class="imgmargin">
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={help_hover} />
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="divfuse-vertical-navigation-i6">
                          <div class="project">Help Center</div>
                        </div>
                      </div>
                      <div className='divmore-section-navigation'>
                        <img class="more-off" alt="" src={more_off_hover} />
                      </div>
                    </div>
                  </button>
                </div>
                <div class="fuse-vertical-navigation-basic">
                  <button
                    class="fuse-vertical-navigation-basic1"
                    id="fuseVerticalNavigationBasicContainer"
                  >
                    <div className={hoveredLink === 'mailbox' ? defaultClassName : hoveredClassName} 
                          onMouseEnter={() => this.handleMouseEnter('mailbox')}
                          onMouseLeave={this.handleMouseLeave}>
                      <div class="imgmargin">
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={mailbox_hover} />
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="divfuse-vertical-navigation-i6">
                          <div class="project">Mailbox</div>
                        </div>
                      </div>
                      <div class="divfuse-vertical-navigation-i28">
                        <div class="userh2d-1823ff5a">
                          <div class="divfuse-vertical-navigation-i30">27</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div class="fuse-vertical-navigation-basic">
                  <button
                    class="fuse-vertical-navigation-basic1"
                    id="fuseVerticalNavigationBasicContainer"
                  >
                    <div className={hoveredLink === 'notes' ? defaultClassName : hoveredClassName} 
                          onMouseEnter={() => this.handleMouseEnter('notes')}
                          onMouseLeave={this.handleMouseLeave}>
                      <div class="imgmargin">
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={notes_hover} />
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="divfuse-vertical-navigation-i6">
                          <div class="project">Notes</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div class="fuse-vertical-navigation-basic">
                  <button
                    class="fuse-vertical-navigation-basic1"
                    id="fuseVerticalNavigationBasicContainer"
                  >
                    <div className={hoveredLink === 'scrumboard' ? defaultClassName : hoveredClassName} 
                          onMouseEnter={() => this.handleMouseEnter('scrumboard')}
                          onMouseLeave={this.handleMouseLeave}>
                      <div class="imgmargin">
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={scrumboard_hover} />
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="divfuse-vertical-navigation-i6">
                          <div class="project">Scrumboard</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div class="fuse-vertical-navigation-basic">
                  <button
                    class="fuse-vertical-navigation-basic1"
                    id="fuseVerticalNavigationBasicContainer"
                  >
                    <div className={hoveredLink === 'tasks' ? defaultClassName : hoveredClassName} 
                          onMouseEnter={() => this.handleMouseEnter('tasks')}
                          onMouseLeave={this.handleMouseLeave}>
                      <div class="imgmargin">
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={tasks_hover} />
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="divfuse-vertical-navigation-i6">
                          <div class="project">Tasks</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div class="fuse-vertical-navigation-group">
                <div class="divfuse-vertical-navigation-i">
                  <div class="divfuse-vertical-navigation-i1">
                    <div class="userh2d-1823ff5a">
                      <div class="divfuse-vertical-navigation-i3">
                        <div class="dashboards">Pages</div>
                      </div>
                      <div class="divfuse-vertical-navigation-i4">
                        <div class="unique-dashboard-designs">
                          Custom made page designs 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="fuse-vertical-navigation-basic">
                  <button
                    class="fuse-vertical-navigation-basic1"
                    id="fuseVerticalNavigationBasicContainer"
                  >
                    <div className={hoveredLink === 'activities' ? defaultClassName : hoveredClassName} 
                          onMouseEnter={() => this.handleMouseEnter('activities')}
                          onMouseLeave={this.handleMouseLeave}>
                      <div class="imgmargin">
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={activities_hover} />
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="divfuse-vertical-navigation-i6">
                          <div class="project">Activities</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div class="fuse-vertical-navigation-basic">
                  <button
                    class="fuse-vertical-navigation-basic1"
                    id="fuseVerticalNavigationBasicContainer"
                  >
                    <div className={hoveredLink === 'authentication' ? defaultClassName : hoveredClassName} 
                          onMouseEnter={() => this.handleMouseEnter('authentication')}
                          onMouseLeave={this.handleMouseLeave}>
                      <div class="imgmargin">
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={authentication_hover} />
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="divfuse-vertical-navigation-i6">
                          <div class="project">Authentication</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div class="fuse-vertical-navigation-basic">
                  <button
                    class="fuse-vertical-navigation-basic1"
                    id="fuseVerticalNavigationBasicContainer"
                  >
                    <div className={hoveredLink === 'coming' ? defaultClassName : hoveredClassName} 
                          onMouseEnter={() => this.handleMouseEnter('coming')}
                          onMouseLeave={this.handleMouseLeave}>
                      <div class="imgmargin">
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={coming_hover} />
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="divfuse-vertical-navigation-i6">
                          <div class="project">Coming Soon</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div class="fuse-vertical-navigation-basic">
                  <button
                    class="fuse-vertical-navigation-basic1"
                    id="fuseVerticalNavigationBasicContainer"
                  >
                    <div className={hoveredLink === 'error' ? defaultClassName : hoveredClassName} 
                          onMouseEnter={() => this.handleMouseEnter('error')}
                          onMouseLeave={this.handleMouseLeave}>
                      <div class="imgmargin">
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={error_hover} />
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="divfuse-vertical-navigation-i6">
                          <div class="project">Error</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default NavigationBar;