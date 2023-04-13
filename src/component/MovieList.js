import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, filterTitle, filterRating }) => {
  // Filter movies based on title and/or rating
  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
    );
  });

  return (
    <div className="movie-list">
      {filteredMovies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MovieList;
