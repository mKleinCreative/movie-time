import React, { Component } from "react";
import SearchBar from "./SearchBar";
// import TheaterContainer from './TheaterContainer'
// import VideoContainer from './VideoContainer'
import MovieResultsList from "./MovieResultsList";
import API from "../utilities/api";

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

  getMoviesInArea = () => {
    API.getAllMovies()
      .then(response => {
        this.setState({
          movieResults: response.data
        });
        console.log("movie data", this.state.movieResults);
      })
      .catch(err => console.log(err));
  };

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
    this.getMoviesInArea();
  };

  render() {
    return (
      <div>
        <SearchBar
          search={this.state.searchLocation}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <MovieResultsList results={this.state.movieResults} />
      </div>
    );
  }
}

export default Container;
