import React, { Component } from "react";
import TheaterContainer from './TheaterContainer'

class MovieResultsList extends Component { 
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     movieResults: [],
  //     currentMovie: {},
  //     theaterLocations: []
  //   }
  // }

  state = {
    movieResults: [],
    currentMovie: {},
    theaterLocations: []
  }

  // componentWillReceiveProps() {
  //   console.log('it came here');
  //   this.setState({ movieResults: this.props.results })
  // }

  // componentDidMount() {
  //   console.log('this.state, MovieResultsList', this.state);
  // }
  
  render() {
    console.log('these are the listed movies:::', this.props.results);

    return (
      <div>
        <div>
          <ul className="list-group">
            {this.props.results.map(result => (
              <li className="list-group-item" key={result.tmsId} onClick={this.props.handleMovieClick.bind(this, result)}>
                <strong>
                  {result.title}
                </strong>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/*<TheaterContainer results={this.state.movieResults} />*/}
        </div>
      </div>
    )
  }
}

export default MovieResultsList;
