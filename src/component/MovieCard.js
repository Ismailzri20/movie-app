import React from 'react';

const MovieCard = ({ movie, handleMovieClick }) => {
  // Handle movie card click
  const handleClick = () => {
    // Call the handleMovieClick function with the clicked movie object
    handleMovieClick(movie);
  };

  return (
    // Render movie card with title, posterURL, and a click event handler
    <div onClick={handleClick}>
      <h3>{movie.title}</h3>
      <img src={movie.posterURL} alt={movie.title} />
    </div>
  );
};

export default MovieCard;