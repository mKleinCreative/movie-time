import React from "react";

const TheaterContainer = props => (
  <ul className="list-group">
     {props.results.map(result => (
       <li className="list-group-item" key={result.tmsId}>
         <strong>
           {result.title} <em>{result.ratings[0].code}</em>
         </strong>
       </li>
     ))}
  </ul>
);

export default TheaterContainer;
