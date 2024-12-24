import React from 'react';
import { getMovieDetails } from '../api/omdbApi';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = React.useState({});

  React.useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <p>Director: {movie.Director}</p>
      <p>Year: {movie.Year}</p>
    </div>
 );
};

export default MovieDetails;
