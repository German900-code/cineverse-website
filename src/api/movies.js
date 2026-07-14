import { BASE_URL, options } from "./api.js";

export const getTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}/trending/movie/day`, options);

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  return response.json();
};

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular`, options);

  if (!response.ok) {
    throw new Error("Failed to fetch movies", response.status);
  }

  return response.json();
};

export const getMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}`, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch movie details for id: ${id}`);
  }

  return response.json();
};
