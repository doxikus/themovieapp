import React from "react";
import { MovieListContainer, MovieItem } from "../components";

const BASE_URL = 
 "https://api.themoviedb.org/3/discover/movie?api_key=016941c41981a8671ff585ff9e4e867e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="

function useFetchMovies () {
    const [movies, setMovies] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [number, setNumber] = React.useState(1);

    React.useEffect(() => {
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
                setIsLoading(false);  
                              
            })
            .catch(error => {
                setError(error);
            })             
    }, [number])
    const loadMore = () => {
        setNumber(number + 1);
      };
    return{movies, isLoading, error, loadMore}    
}
function ListFetchedMovies (){
    
    const {movies, isLoading, error, loadMore} = useFetchMovies()
    console.log(movies)
    if (error) {
        return <p style={{ color: 'red' }}>{error.message}</p>
      }
    
      if (isLoading) {
        return <p>Loading movies...</p>
      }
    
      return (
        <div> 
            <ol>
            {movies.map(themovie => (            
                <MovieItem key={themovie.id}>
                    {themovie.title}
                </MovieItem>                                                
            ))}
            </ol>
            <button title="Load More" onClick={loadMore}>Load 20 more</button>
        </div>
      );  
}
export default ListFetchedMovies;


