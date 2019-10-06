import React, { Component } from "react";
import useFetchMovies from "../api/FetchMovies";
import { MovieListContainer, MovieItem, MovieTitle, MovieImage } from "../components";

// class MovieList extends Component {  
//   render() {
//     return (
//       <div>
//         <h1>MovieList</h1>
//         <ListFetchedMovies />        
//       </div>
//     );
//   }
// }

// export default MovieList;


function MovieList (){
    
  const {movies, moviesid, isLoading, error, loadMore} = useFetchMovies()
  // console.log(movies)
  console.log(moviesid)
  
  if (error) {
      return <p style={{ color: 'red' }}>{error.message}</p>
    }
  
    if (isLoading) {
      return <p>Loading movies...</p>
    }
  
    return (
      <div> 
          <MovieListContainer>
          {movies.map((themovie, i ) => (            
              <MovieItem key={i}>                    
                  <MovieTitle title={themovie.title} />  
                  <MovieImage image={themovie.poster_path} alt={themovie.title} />
                                    
              </MovieItem>                                                
          ))}
          </MovieListContainer>
          <button title="Load More" onClick={loadMore}>Load 20 more</button>
      </div>
    );  
}
export default MovieList;