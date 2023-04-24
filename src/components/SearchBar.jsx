import React from 'react';

function SearchBar(props) {
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search your Recent Transactions"
        value={props.searchTerm}
        onChange={props.handleSearch}
      />
      <button className="search-icon" onClick={props.handleSearchClick}>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}

export default SearchBar;