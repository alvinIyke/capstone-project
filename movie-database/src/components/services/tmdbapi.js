import axios from 'axios';

const OMDB_API_KEY = 'YOUR_OMDB_API_KEY';
const OMDB_API_URL = '(link unavailable)';

const omdbApi = axios.create({
  baseURL: OMDB_API_URL,
  params: {
    apiKey: OMDB_API_KEY,
  },
});

export const searchMovies = async (searchTerm) => {
  try {
    const response = await omdbApi.get('', {
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
      const response = await omdbApi.get('', {
        params: {
          i: movieId,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  