import React, { useState } from 'react';

const Search = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Add your search logic here
  };

  const toggleSearch = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="">
        {isVisible && (
          <div>
            <input 
              className="searchbox" 
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search..."
            />
            <span className="searchHide" onClick={toggleSearch}>X</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;