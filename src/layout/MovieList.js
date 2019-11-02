import React, { Component } from "react";
import ReactDOM from "react-dom";
import useFetchMovies from "../api/FetchMovies";
import { Link } from "react-router-dom";

import { MovieListContainer, MovieItem, MovieTitle, MovieImage } from "../components";


function MovieList (){
    
  const {movies, isLoading, error, loadMore} = useFetchMovies()
  
  if (error) {
      return <p style={{ color: 'red' }}>{error.message}</p>
    }
  
  
    return (
      <div> 
          <MovieListContainer>
          {movies.map((themovie, i ) => (            
              <MovieItem key={i}>                    
                  <MovieTitle title={themovie.title} />  
                  <MovieImage image={themovie.poster_path} alt={themovie.title} />
                  <Link to={`/movie/${themovie.id}`}>Show details</Link>                                    
              </MovieItem>                                                
          ))}

          {isLoading && 'Fetching more list items...'}

          </MovieListContainer>
          <button title="Load More" onClick={loadMore}>Load 20 more</button>
      </div>
    );  
}
export default MovieList;