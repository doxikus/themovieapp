import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const BASE_URL = 
 "https://api.themoviedb.org/3/movie/"
const BASE_URL_CONTINUE = 
 "?api_key=016941c41981a8671ff585ff9e4e867e&language=en-US"

 const useFetchMoviesDetails = ({match}) => {
     
    const {
        params: { movieId },
      } = match;
    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);    

    useEffect(() => {
        setIsLoading(true);
        // fetch(BASE_URL)
        fetch(`${BASE_URL}${movieID}${BASE_URL_CONTINUE}`)
            .then(res => {
                if(res.ok){
                    return res.json();
                }
                else{
                    throw Error ('Errot with data load')
                }
            })
            .then(res => {
                setMovie(movie.results);
                // setMovies([...movie, ...res.results]);            
                setIsLoading(false);  
                              
            })
            .catch(error => {
                setError(error);
            })             
    }, [movieID])
  
    return{movie, isLoading, error, loadMore}   
 }

export default useFetchMoviesDetails;


