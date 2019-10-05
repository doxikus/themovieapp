import React from 'react';

function MovieListItem({ name, ...restProps }) {
    return <li {...restProps}></li>;
  }
export default MovieListItem;