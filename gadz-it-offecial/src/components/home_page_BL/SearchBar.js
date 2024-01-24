import React, { useState } from 'react';
import './SearchBar.css'
import Xicon from '../../public/clear-white-item.svg';


const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');



  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
  
  <form class="search-box" onSubmit={handleSubmit} >
    
    <input
     type="text" 
     class="input-search" 
     placeholder="Type to Search..." 
     autoFocus 
     value={searchTerm} 
     onChange={handleInputChange}
    />
    
    {searchTerm  && (
                  <img className="clear-search-icon" alt="" src={Xicon} onClick={ handleClear}  />
    )}


      
  </form>
  );
};

export default SearchBar;
