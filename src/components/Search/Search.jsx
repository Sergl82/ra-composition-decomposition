/* eslint-disable react/prop-types */
import React from 'react';
import './Search.css';
import Search__serviceList from './Search-components/Search__serviceList';

function Search({ img, value }) {
   return (
      <div className="Search">
         <Search__serviceList />
         <div className="Search__row">
            <img className="Search__logo" src={img} alt="logo" />
            <form className="search-form">
               <input className="search-input" type="text" />
               <button className="search-button" type="submit">
                  Найти!
               </button>
            </form>
         </div>
         <div className="Search__example">
            <span className="Search__example_text">
               Найдётся всё. Например, <a href="#101">{value}</a>
            </span>
         </div>
      </div>
   );
}

export default Search;
