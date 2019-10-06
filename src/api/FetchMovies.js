import React, { useState, useEffect } from "react";

const BASE_URL = 
 "https://api.themoviedb.org/3/discover/movie?api_key=016941c41981a8671ff585ff9e4e867e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="

function useFetchMovies () {
    const [movies, setMovies] = useState([]);
    const [moviesid, setMoviesId] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [number, setNumber] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        // fetch(BASE_URL)
        fetch(`${BASE_URL}${number}`)
            .then(res => {
                if(res.ok){
                    return res.json();
                }
                else{
                    throw Error ('Errot with data load')
                }
            })
            .then(res => {
                // setMovies(movies.results);
                setMovies([...movies, ...res.results]);
                setMoviesId(res.results);
                setIsLoading(false);  
                              
            })
            .catch(error => {
                setError(error);
            })             
    }, [number])
    const loadMore = () => {
        setNumber(number + 1);
      };    
    return{movies, moviesid, isLoading, error, loadMore}    
}

export default useFetchMovies;


