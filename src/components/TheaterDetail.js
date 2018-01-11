import React, { Component } from 'react';

class TheaterDetail extends Component {
 
  render () {
    return (
      <ul>
        {
          this.props.theater.map((result, index) => (
            <li className="list-group-item" key={index}>
              <strong>
                {result.theatre.name}
              </strong>
              <a href={result.ticketURI}> { result.dateTime } </a>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default TheaterDetail