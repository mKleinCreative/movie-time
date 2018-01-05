import React from "react";

const SearchBar = props => (
  <form>
    <div className="form-group">
      <label htmlFor="search">Search:</label>
      <input
        onChange={props.handleInputChange}
        value={props.searchLocation}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search for a location (example: San Fransisco, CA)"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-primary">
        Search
      </button>
    </div>
  </form>
);

export default SearchBar;
