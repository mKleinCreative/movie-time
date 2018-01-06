import React from "react";

const SearchBar = props => (
  <form>
    <div className="form-group">
      <label htmlFor="search">Search:</label>
      <input
        onChange={props.handleInputChange}
        value={props.searchLocation}
        name="searchLocation"
        type="text"
        className="form-control"
        placeholder="Enter zip code to search&hellip;"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-primary">
        Search
      </button>
    </div>
  </form>
);

export default SearchBar;
