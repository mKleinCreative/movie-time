import React, { Component } from "react";
import SearchBar from "./SearchBar";
// import TheaterContainer from './TheaterContainer'
// import VideoContainer from './VideoContainer'
import MovieResultsList from "./MovieResultsList";
import Alert from "../components/Alert";
import API from "../utilities/api";

class Container extends Component {
  state = {
    searchLocation: "",
    movieResults: [],
    currentMovie: {
      title: "",
      rating: "",
      duration: "",
      description: ""
    },
    error: ""
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

  render() {
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
        <MovieResultsList results={this.state.movieResults} />
      </div>
    );
  }
}

export default Container;
