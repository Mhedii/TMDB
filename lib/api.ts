import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Ensure this is set in your .env.local
const BASE_URL = "https://api.themoviedb.org/3";
console.log(API_KEY);
// Type definitions for movies and details
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

export interface MovieDetails extends Movie {
  genres: Array<{ id: number; name: string }>;
  cast: Array<{ name: string; character: string; profile_path: string }>;
}

// Function to fetch popular movies
export const fetchPopularMovies = async (page: number): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: { api_key: API_KEY, page },
  });
  return response.data.results;
};

// Function to search for movies
export const searchMovies = async (
  query: string,
  page: number
): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query, page },
  });
  return response.data.results;
};

// Function to fetch movie details
export const fetchMovieDetails = async (id: number): Promise<MovieDetails> => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};

// Function to fetch movie credits (cast)
export const fetchMovieCredits = async (
  id: number
): Promise<{
  cast: Array<{ name: string; character: string; profile_path: string }>;
}> => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};

// Function to fetch movie recommendations
export const fetchMovieRecommendations = async (
  id: number
): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/recommendations`, {
    params: { api_key: API_KEY },
  });
  return response.data.results;
};
