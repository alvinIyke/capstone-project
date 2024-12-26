import React, { useState } from 'react';
import { searchMovies } from '../api/omdbApi';

/*SearchBar with Submit Button*/
const SearchBar = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await searchMovies(searchTerm);
      setMovies(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setMovies([]);
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-green-600'} border-t-4 border-b-4 ${darkMode ? 'border-gray-700' : 'border-green-700'}`}>
     <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search for movies or TV shows"
        className={`bg-transparent outline-none ${darkMode ? 'text-white placeholder-gray-400' : 'text-gray-800'}`}
      />
      <button type="submit" className={`bg-gray-800 ${darkMode ? 'bg-gray-900' : ''} hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500`}>
       Search
      </button>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>{movie.Title}</li>
          ))}
        </ul>
      )}
     </form>
    </div>
  );
};

export default SearchBar;
