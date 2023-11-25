import React, { Component } from 'react';

import './Header.css';
import SearchBar from './SearchBar';
import logogadz from '../../public/Asset 6-2.svg';
import divBarIem1 from '../../public/divbar--item.svg';
import divBarIem2 from '../../public/divbar--item1.svg';
import divBarIem3 from '../../public/divbar--item2.svg';


class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchBarVisible: false,
    };
  }
  
  handleSearch = (searchTerm) => {
    // Perform search logic here
    console.log('Search term:', searchTerm);
  };
  
    

   handleButtonClick = () => {
    if (!this.state.isSearchBarVisible) {
      this.setState({ isSearchBarVisible: true });
    }else {
      this.setState({ isSearchBarVisible: false });
    }
    
  };

  render() {

    const { isSearchBarVisible } = this.state;
  

    return (
      <div className="header-frame">
          <div className="divleftpanel-logo">
            <button className='logogadz-button'>
             <img className="logogadz-icon" alt="" src={logogadz} />
            </button>
          </div>
          <div className="header">
            <div className="divfn-nav-bar">
            <button className='item' >
                <img
                  className="divbar-item-icon"
                  alt=""
                  src={divBarIem3}
                />
              </button>
              <button className='item' >
                <img
                  className="divbar-item-icon"
                  alt=""
                  src={divBarIem2}
               />
              </button>
              
              <button onClick={this.handleButtonClick} className='item' >
                <img
                  className="divbar-item-icon"
                  alt=""
                  src={divBarIem1}
                />
                
              </button>
              {isSearchBarVisible && <SearchBar onSearch={this.handleSearch}/>}
             </div>
          </div>
        </div>
    )
  }
}

export default header;