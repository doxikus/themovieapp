import React from "react";

const BASE_URL = 
// "https://api.themoviedb.org/3/movie/550?api_key=016941c41981a8671ff585ff9e4e867e"
 "https://api.themoviedb.org/3/discover/movie?api_key=016941c41981a8671ff585ff9e4e867e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"

function useFetchMovies () {
    const [movies, setMovies] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        setIsLoading(true);
        fetch(BASE_URL)
            .then(res => {
                if(res.ok){
                    return res.json();
                }
                else{
                    throw Error ('Errot with data load')
                }
            })
            .then(movies => {
                setMovies(movies.results);
                setIsLoading(false);  
                              
            })
            .catch(error => {
                setError(error);
            })             
    }, [])

    return{movies, isLoading, error}    
}
function ListFetchedMovies (){
    
    const {movies, isLoading, error} = useFetchMovies()
    console.log(movies)
    if (error) {
        return <p style={{ color: 'red' }}>{error.message}</p>
      }
    
      if (isLoading) {
        return <p>Loading movies...</p>
      }
    
      return (
        <div>          
            <ul>
            {movies.map(themovie => (            
                    <li key={themovie.id}>{themovie.title} {themovie.id}</li>            
            ))}
            </ul>
        </div>
      );  
}
export default ListFetchedMovies;


