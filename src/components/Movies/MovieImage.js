import React from 'react';

const MovieImage = (props) => {
    return (
        <figure>
            {
                props.image == null ? <img src={`https://via.placeholder.com/185`} alt="defualt image" /> :
                <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt={props.alt} />
            }            
        </figure>
    );
  }
export default MovieImage;