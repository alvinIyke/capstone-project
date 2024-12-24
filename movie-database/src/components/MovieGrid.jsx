import React from 'react';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {movies.map((movie) => (
       /* <MovieCard key={(link unavailable)} movie={movie} />*/
      ))}
    </div>
  );
};

export default MovieGrid;
