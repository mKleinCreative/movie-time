import React, { Component } from "react";
import SearchBar from "./SearchBar";
// import TheaterContainer from './TheaterContainer'
// import VideoContainer from './VideoContainer'
// import MovieResultsList from './MovieResultsList'

class Container extends Component {
  state = {
    searchLocation: "",
    movieResults: [],
    theaterResults: [],
    currentMovie: {
      title: "",
      rating: "",
      duration: "",
      description: ""
    }
  };

  // componentDidMount() {
  //   // get geolocation library

  //   // use that information to ping fandango api

  //   // get theaters in current area

  //   // set current Movie to first movie result
  // }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // when we submit the form, we're going to submit it to google places API and do something about movies.
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <SearchBar
          search={this.state.searchLocation}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
       { /*
        <MovieResultsList results={this.state.movieResults} /> */}
      </div>
    );
  }
}

export default Container;
