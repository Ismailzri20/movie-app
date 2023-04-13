import React from 'react';

const MovieDetails = ({ movie, handleBackToHome }) => {
  // Handle back button click
  const handleBackClick = () => {
    // Call the handleBackToHome function to navigate back to the home page
    handleBackToHome();
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Description: {movie.description}</p>
      <p>Trailer Link: {movie.trailerLink}</p>
      {/* Render back button with click event handler */}
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
};