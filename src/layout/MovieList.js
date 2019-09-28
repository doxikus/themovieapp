import React, { Component } from "react";
import ListFetchedMovies from "../api/FetchMovies";


class MovieList extends Component {  
  render() {
    return (
      <div>
        <h1>MovieList</h1>
        <ListFetchedMovies />        
      </div>
    );
  }
}

export default MovieList;