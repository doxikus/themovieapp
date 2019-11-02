import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { MovieTitle, MovieImage } from '..';
// import useFetchMoviesDetails from '../../api/FetcMovieDetails';
import useFetchMovies from '../../api/FetchMovies';

const BASE_URL = 
 "https://api.themoviedb.org/3/movie/"
const BASE_URL_CONTINUE = 
 "?api_key=016941c41981a8671ff585ff9e4e867e&language=en-US"
 
  const MovieData = (movie) => {

    const [moviedetail, setThemovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);    

    useEffect(() => {
      setIsLoading(true);
      // fetch(BASE_URL)
      fetch(`${BASE_URL}${movie.match.params.movieId}${BASE_URL_CONTINUE}`)
          .then(res => {
              if(res.ok){
                  return res.json();
              }
              else{
                  throw Error ('Errot with data load')
              }
          })
          .then(res => {
              setThemovie(res);
              // setMovies([...movies, ...res.results]);            
              setIsLoading(false);  
              // console.log(res)
                            
          })
          .catch(error => {
              setError(error);
          })             
  }, [])

    // const {movies} = useFetchMovies()
    // console.log(id.match.params.movieId)
    console.log(moviedetail)
    if (error) {
      return <p style={{ color: 'red' }}>{error.message}</p>
    }
  
    if (isLoading) {
      return <p>Loading movie</p>
    }
    return (
      <div className="details">
      <h1>{moviedetail.title}</h1>
   </div>
    );      
}

export default MovieData;