import React, { Component } from 'react';
import './HomePage.css';
import Header from '../components/home_page/Header';
import Home from '../components/home_page/Home';
import Footer from '../components/home_page/Footer';

class HomePage extends Component {
  render() {
    return (
      <div className="desktop">
        <div className="global-frame">
          <Header/>
          <div className="body-frame">
            <Footer/>
            <Home/>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;