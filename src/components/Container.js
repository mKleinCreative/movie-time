import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoContainer from './VideoContainer'
import TheaterContainer from './TheaterContainer'
import MovieResultsList from "./MovieResultsList";
import Alert from "../components/Alert";
import API from "../utilities/api";

class Container extends Component {
  state = {
    searchLocation: "",
    movieResults: [],
    error: "",
    currentMovie: null
  };

  setFormError = errorMessage => {
    this.setState({
      error: errorMessage
    });
  };

  getMoviesInArea = () => {
    API.getAllMovies(this.state.searchLocation)
      .then(response => {
        // If data comes back, make sure it's reflected in our state.
        // Otherwise, alert the user that we were unable to find any results.
        if (response.data.length > 0) {
          console.log('movies', response.data)
          this.setState({ movieResults: response.data });
        } else {
          this.setFormError(
            `Unable to find any showtimes for ZIP Code ${
              this.state.searchLocation
            }.`
          );
        }
      })
      .catch(err => {
        this.setFormError(
          `Showtimes API failed with error code: ${err.response.status} - ${
            err.response.data
          }`
        );
      });
  };

  handleZipCodeInputChange = event => {
    this.setFormError("");

    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setFormError("");

    // Validate the form, since the API only accepts ZIP Codes.
    const usZipCodeRegex = /^\d{5}(-\d{4})?$/;
    if (usZipCodeRegex.test(this.state.searchLocation)) {
      console.log('searchLocation::', this.state.searchLocation);
      this.getMoviesInArea();
    } else {
      this.setState({ searchLocation: "" });
      this.setFormError(
        `${
          this.state.searchLocation
        } is not a valid US ZIP Code. Please try again.`
      );
    }
  };

  handleMovieClick = movie => {
    this.setState({ currentMovie: movie })
  }

  showCurrentMovie = () => {
    const { currentMovie } = this.state
    if ( currentMovie ) { 
      return (
        <div>
          <VideoContainer term={ `${currentMovie.title} Trailer`}/>
          <TheaterContainer movie={ currentMovie } /> 
        </div>
      )
    } else {
      return ( "Choose your zipcode and select a Movie to start!" )
    }
  }

  render() {
    console.log('Container moviestate::', this.state.movieResults);
    

    return (
      <div>
        <Alert style={{ opacity: this.state.error ? "1" : "0" }} type="danger">
          {this.state.error}
        </Alert>
        <SearchBar
          search={this.state.searchLocation}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleZipCodeInputChange}
        />
        <MovieResultsList handleMovieClick={this.handleMovieClick} results={this.state.movieResults} />
        <div>
          { this.showCurrentMovie() }
        </div>
      </div>
    );
  }
}

export default Container;
