import React, { Component } from "react";
import TheaterDetail from "./TheaterDetail.js"
console.log('TheaterContainer Exists! (╯°□°)╯︵ ┻━┻ ')

export default class TheaterContainer extends Component {


  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item" key={this.props.movie.rootId}>
            <strong>
              {this.props.movie.title} <em>{this.props.movie.ratings[0].code}</em>
            </strong>
            <strong> Directed By: </strong> {this.props.movie.directors}
          </li>
          <li className="list-group-item">
            {this.props.movie.longDescription}
          </li>
        </ul>
        <ul className="list-group"> 
          <TheaterDetail theater={this.props.movie.showtimes} />
        </ul>
      </div>
    )
  }
}

