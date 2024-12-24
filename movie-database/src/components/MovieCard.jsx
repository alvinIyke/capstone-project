import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
      <p className="text-gray-600">{movie.overview}</p>
    </div>
  );
};

export default MovieCard;
