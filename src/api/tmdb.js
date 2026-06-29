// export const getPopularMovies = async () => {
//   const response = await fetch("url");
// };

const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    accept: "application/json",
  },
};

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
