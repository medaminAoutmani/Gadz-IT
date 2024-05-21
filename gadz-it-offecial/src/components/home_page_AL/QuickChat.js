import React, { Component } from 'react'
import './QuickChat.css';
import svg1 from '../../assets/img--svg.svg';
import male_02 from '../../assets/male02jpg@2x.png';
import male_12 from '../../assets/male12jpg@2x.png';
import male_06 from '../../assets/male06jpg@2x.png';
import female_04 from '../../assets/female04jpg@2x.png';
import male_11 from '../../assets/male11jpg@2x.png';
import male_17 from '../../assets/male17jpg@2x.png';
import female_02 from '../../assets/female02jpg@2x.png';
import female_05 from '../../assets/female05jpg@2x.png';
import female_07 from '../../assets/female07jpg@2x.png';
import female_09 from '../../assets/female09jpg@2x.png';
import female_13 from '../../assets/female13jpg@2x.png';
import female_16 from '../../assets/female16jpg@2x.png';
import male_09 from '../../assets/male09jpg@2x.png';





class QuickChat extends Component {
  render() {
    return (
      <div class="quick-chat">
              <div class="divfixed">
                <div class="divflex12">
                  <div class="divquick-chat-header">
                    <div class="divflex13">
                      <div class="divflex14">
                        <img
                          class="img-svg4"
                          alt=""
                          src={svg1}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="divflex15">
                    <div class="divflex-01">
                      <div class="fuse-vertical-navigation-group-quick-chat">
                        <div class="divflex16">
                          <div class="divrelative1">
                            <img
                              class="male-02jpg-icon"
                              alt=""
                              src={male_02}
                            />

                            
                          </div>
                        </div>
                        <div class="divflex16">
                          <div class="divrelative2">
                            <img
                              class="male-12jpg-icon"
                              alt=""
                              src={male_12}
                            />
                          </div>
                        </div>
                        <div class="divflex16">
                          <div class="divrelative1">
                            <img
                              class="male-12jpg-icon"
                              alt=""
                              src={male_06}
                            />
                            <div class="divabsolute"></div>
                          </div>
                        </div>
                        <div class="divflex16">
                          <div class="divrelative2">
                            <img
                              class="male-12jpg-icon"
                              alt=""
                              src={female_04}
                            />
                          </div>
                        </div>
                        <div class="divflex16">
                          <div class="divrelative2">
                            <div class="divflex21">
                              <div class="whithout-photo">M</div>
                            </div>
                          </div>
                        </div>
                        <div class="divflex16">
                          <div class="divrelative2">
                            <img
                              class="male-12jpg-icon"
                              alt=""
                              src={male_11}
                            />
                          </div>
                        </div>
                        <div class="divflex16">
                          <div class="divrelative2">
                            <img
                              class="male-12jpg-icon"
                              alt=""
                              src={male_17}
                            />
                          </div>
                        </div>
                        <div class="divflex16">
                          <div class="divrelative2">
                            <img
                              class="male-12jpg-icon"
                              alt=""
                              src={female_02}
                            />
                          </div>
                        </div>
                        <div class="divflex16">
                          <div class="divrelative2">
                            <img
                              class="male-12jpg-icon"
                              alt=""
                              src={female_05}
                            />
                          </div>
                        </div>
                        <div class="divflex16">
                          <div class="divrelative2">
                            <img
                              class="male-12jpg-icon"
                              alt=""
                              src={female_07}
                            />
                          </div>
                        </div>
                        <div class="divflex16">
                          <div class="divrelative2">
                            <img
                              class="male-12jpg-icon"
                              alt=""
                              src={female_09}
                            />
                          </div>
                        </div>
                        <div class="divflex16">
                          <div class="divrelative2">
                            <img
                              class="male-12jpg-icon"
                              alt=""
                              src={female_13}
                            />
                          </div>
                        </div>
                        <div class="divflex16">
                          <div class="divrelative2">
                            <img
                              class="male-12jpg-icon"
                              alt=""
                              src={female_16}
                            />
                          </div>
                        </div>
                        <div class="divflex16">
                          <div class="divrelative2">
                            <div class="divflex21">
                              <div class="whithout-photo">A</div>
                            </div>
                          </div>
                        </div>
                        <div class="divflex16">
                          <div class="divrelative2">
                            <img
                              class="male-12jpg-icon"
                              alt=""
                              src={male_09}
                            />
                          </div>
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

export default QuickChat;