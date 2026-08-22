import { useState, useEffect } from "react";
import { getPopularMovies, getTrendingMovies } from "../api/movies";
import { FaArrowCircleRight } from "react-icons/fa";
import { MEDIA_TYPE } from "../constants/mediaType";

import MediaGrid from "./MediaGrid";
import NavButton from "./NavButton";
import Hero from "./Hero";

const Home = () => {
  const [heroMovie, setHeroMovie] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const trendingData = await getTrendingMovies();
        const popularData = await getPopularMovies();

        setHeroMovie(trendingData.results[0]);
        setPopularMovies(popularData.results);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <Hero heroMovie={heroMovie} isLoading={isLoading} />
      <main className="mx-auto px-4 py-10 md:px-8 bg-black/90">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-50">Trending Movies</h2>

          <NavButton
            path={"/trending"}
            label="View all trending movies"
            icon={<FaArrowCircleRight />}
          />
        </div>
        <MediaGrid
          media={popularMovies.slice(0, 5)}
          isLoading={isLoading}
          mediaType={MEDIA_TYPE.MOVIE}
        />
      </main>
    </section>
  );
};

export default Home;
