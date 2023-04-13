import React, { useState } from 'react';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  // State for movies and filter values
  const [movies, setMovies] = useState([]); // movies state
  const [filterTitle, setFilterTitle] = useState(''); // title filter state
  const [filterRating, setFilterRating] = useState(0); // rating filter state

  // Handle adding a new movie
  const handleAddMovie = (newMovie) => {
    // Update movies state with the new movie
    setMovies([...movies, newMovie]);
  };

  // Handle title filter change
  const handleTitleChange = (e) => {
    // Update title filter state
    setFilterTitle(e.target.value);
  };

  // Handle rating filter change
  const handleRatingChange = (e) => {
    // Update rating filter state
    setFilterRating(Number(e.target.value));
  };

  return (
    <div>
      <h1>Movie App</h1>
      {/* Render Filter component with filter change handlers */}
      <Filter
        handleTitleChange={handleTitleChange}
        handleRatingChange={handleRatingChange}
      />
      {/* Render MovieList component with movies and filter values */}
      <MovieList
        movies={movies}
        filterTitle={filterTitle}
        filterRating={filterRating}
      />
    </div>
  );
};

export default App;
