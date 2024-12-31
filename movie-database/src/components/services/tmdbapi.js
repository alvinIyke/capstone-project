import axios from 'axios';

const TMDB_API_KEY = e82851bccb823fad06989d22f76869b8;
const TMDB_API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=e82851bccb823fad06989d22f76869b8';

const tmdbApi = axios.create({
  baseURL: TMDB_API_URL,
  params: {
    apiKey: TMDB_API_KEY,
  },
});

export const searchMovies = async (searchTerm) => {
  try {
    const response = await tmdbApi.get('', {
      params: {
        s: searchTerm,
      },
    });
    return response.data.Search;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieDetails = async (movieId) => {
    try {
      const response = await tmdbApi.get('', {
        params: {
          i: movieId,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  