import React, { useState, } from 'react';
import './SearchBar.css'
import Xicon from '../../public/clear-white-item.svg';


const SearchBar = ({ onSearch, oppen, isWhiteMode }) => {
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

    <form className={`flex items-center justify-center ${oppen ? 'w-[280px]' : 'w-0  '} h-auto transition-all duration-1000 ease-in-out mr-[26px]`} onSubmit={handleSubmit} >

      <input
        type="text"
        className={`h-[40px] w-full px-[10px] text-[18px] ${isWhiteMode ? 'text-black' : 'text-white'}  bg-transparent rounded-none border-none placeholder:text-[rgba(255, 255, 255, .5)] placeholder:font-light focus:outline-none`}
        placeholder="Type to Search..."
        autoFocus
        value={searchTerm}
        onChange={handleInputChange}
      />
    </form >
  );
};

export default SearchBar;
