import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, filterTitle, filterRating, handleMovieClick }) => {
    // Filter movies based on title and rating
    const filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        movie.rating >= filterRating
    );
  
    return (
      <div>
        <h2>Movies</h2>
        {filteredMovies.map((movie) => (
          // Render MovieCard component for each filtered movie
          <MovieCard key={movie.id} movie={movie} handleMovieClick={handleMovieClick} />
        ))}
      </div>
    );
  };