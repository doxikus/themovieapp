import React from 'react';

// const MovieListItem = (props) => {
//     return (
//       <li className="movie-list-item">

//       </li>
//     );
// }

function MovieListItem({ name, ...restProps }) {
    return <li {...restProps}></li>;
  }
export default MovieListItem;