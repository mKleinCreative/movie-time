import axios from "axios";
import moment from "moment";
// Export an object containing methods we'll use for accessing the Dog.Ceo API
const movieApiKey = 'k8u3xktej4edp8fuepfq3v2f'
const currentDate = moment().format('YYYY-MM-DD')
const numberOfDays = 1;

export default {
  getAllMovies: function (searchLocation) {
    return axios.get(`http://data.tmsapi.com/v1.1/movies/showings?startDate=${currentDate}&zip=${searchLocation}&numDays=${numberOfDays}&api_key=${movieApiKey}`)
  }
};
