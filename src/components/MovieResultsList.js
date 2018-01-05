import React from "react";

const MovieResultsList = props =>
  <ul className="list-group">
    {props.results.map(result =>
      <li className="list-group-item" key={result.id}>
        <strong>{result.title}</strong>
        <em>{result.genre}</em>
      </li>
    )}
  </ul>;

export default MovieResultsList;