import React, { Component } from "react";
import TheaterContainer from './TheaterContainer'

class MovieResultsList extends Component { 
  state = {
    movieResults: [],
    currentMovie: {},
    theaterLocations: []
  }
  
  render() {
    console.log('these are the listed movies:::', this.props.results);

    return (
      <div>
        <div>
          <ul className="list-group">
            {this.props.results.map( result => (
              <li className="list-group-item" key={result.tmsId} onClick={this.props.handleMovieClick.bind(this, result)}>
                <strong>
                  {result.title} <em> {result.ratings[0].code} </em>
                </strong> 
                <br/>
                {result.genres.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MovieResultsList;
