import React, { useState } from "react";
import "./Styles/Search.css"; // Import the CSS file for styling

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("shows"); // Default search type is "shows"

  // Function to handle the search button click
  const handleSearch = () => {
    // Call the onSearch function passed as a prop with the searchQuery and searchType
    onSearch(searchQuery, searchType);
  };

  return (
    <div className="search-container">
      {/* Input field for the search query */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
      {/* Dropdown to select the search type */}
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className="search-dropdown"
      >
        <option value="shows">Shows</option>
        <option value="seasons">Seasons</option>
        <option value="episodes">Episodes</option>
      </select>
      {/* Search button */}
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
}

export default Search;

