import { useState, useEffect } from "react";
import { getPopularMovies, getTrendingMovies } from "../api/tmdb";
import { FaArrowCircleRight } from "react-icons/fa";

import MediaGrid from "./MediaGrid";
import NavButton from "./NavButton";
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
      <main className="mx-auto px-4 py-10 md:px-8 bg-black/90">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-50">Trending Movies</h2>
          <NavButton
            path={"/trending"}
            label="View all trending movies"
            icon={<FaArrowCircleRight />}
          />
        </div>
        <MediaGrid movies={popularMovies.slice(0, 5)} />
      </main>
    </section>
  );
};

export default Home;
