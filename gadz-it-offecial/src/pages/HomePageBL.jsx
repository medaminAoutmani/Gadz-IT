import React, { Component } from 'react';
import './HomePageBL.css';
import Header from '../components/home_page_BL/Header';
import Home from '../components/home_page_BL/Home';
import Footer from '../components/home_page_BL/Footer';

class HomePageBL extends Component {
  render() {
    return (
      <div className="desktop">
        <div className="global-frame">
          <Header/>
          <div className="body-frame">
            <Home/>
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePageBL;