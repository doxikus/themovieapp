import React from 'react';

function MovieListContainer({ name, ...restProps }) {
    return (
      <ol {...restProps}></ol>
    );      
  }
export default MovieListContainer;