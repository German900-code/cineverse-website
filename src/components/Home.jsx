import { useState, useEffect } from "react";
import { getPopularMovies, getTrendingMovies } from "../api/tmdb";

import MovieGrid from "./MovieGrid";
import Hero from "./Hero";

const Home = () => {
  const [heroMovie, setHeroMovie] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then((data) => setHeroMovie(data.results[0]));

    getPopularMovies().then((data) => setPopularMovies(data.results));
  }, []);

  console.log("HERO MOVIE: ", heroMovie);
  console.log("POPULAR MOVIES: ", popularMovies);
  return (
    <section>
      <Hero heroMovie={heroMovie} />
      <MovieGrid movies={popularMovies} />
    </section>
  );
};

export default Home;
