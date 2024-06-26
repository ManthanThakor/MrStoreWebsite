import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import './Search.scss';

const Search = ({ setShowsearch }) => {
  const [animateOut, setAnimateOut] = useState(false);

  const handleClose = () => {
    setAnimateOut(true);
  };

  useEffect(() => {
    if (animateOut) {
      const timer = setTimeout(() => {
        setShowsearch(false);
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [animateOut, setShowsearch]);

  return (
    <div className={`search-model ${animateOut ? 'slide-out' : ''}`}>
      <div className="form-field">
        <input 
          type="text" 
          autoFocus 
          placeholder="Search for Products" 
        />
        <MdClose onClick={handleClose} />
      </div>
      <div className="search-result-content">
        <div className="search-result">
            
        </div>
      </div>
    </div>
  );
};

export default Search;
