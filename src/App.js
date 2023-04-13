import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieDetails from './MovieDetails';

const App = () => {
  // State for movies and filter values
  const [movies, setMovies] = useState([]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);
};

  // Handle adding a new movie
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Handle title filter change
  const handleTitleChange = (e) => {
    setFilterTitle(e.target.value);
  };

  // Handle rating filter change
  const handleRatingChange = (e) => {
    setFilterRating(Number(e.target.value));
  };

  // Handle movie card click
  const handleMovieClick = (movie) => {
    // Use React Router to navigate to movie details page with movie object as URL parameter
    history.push(`/movies/${movie.id}`);
  };

  // Handle back button click in MovieDetails component
  const handleBackToHome = () => {
    // Use React Router to navigate back to the home page
    history.push('/');
  };

  return (
    <Router>
      <div>
        <h1>Movie App</h1>
        <Filter></Filter>
      </div>
    </Route>
  )
