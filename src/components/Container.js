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
    currentMovie: {
      title: "",
      rating: "",
      duration: "",
      description: ""
    }
  };

  getMoviesInArea = () => {
    API.getAllMovies(this.state.searchLocation)
      .then(response => {
        // If data comes back, make sure it's reflected in our state.
        // Otherwise, alert the user that we were unable to find any results.
        if (response.data.length > 0) {
          this.setState({
            movieResults: response.data
          });
          console.log("movie data", this.state.movieResults);
        } else {
          // TODO: Handle the error state when no data comes back from the API. Use a new Alert component.
          const friendlyError = `Unable to find any showtimes for ZIP Code ${
            this.state.searchLocation
          }.`;
          console.log(friendlyError);
        }
      })
      .catch(err => {
        // TODO: Display this error client-side. Omit console.log. Use same Alert component.
        const friendlyError = `Error occured when calling the Showtimes API: \n\n${err}.`;
        console.log(friendlyError);
      });
  };

  handleZipCodeInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const usZipCodeRegex = /^\d{5}(-\d{4})?$/;

    // Validate the form, since the API only accepts ZIP Codes.
    if (usZipCodeRegex.test(this.state.searchLocation)) {
      this.getMoviesInArea();
    } else {
      this.setState({ searchLocation: "" });
      // TODO: Handle the case where the user enters in letters instead of digits.
      // Use same Alert component.
      const friendlyError = `${this.state.searchLocation} is not a valid US ZIP Code. Please try again.`;
      console.log(friendlyError);
    }
  };

  render() {
    return (
      <div>
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
