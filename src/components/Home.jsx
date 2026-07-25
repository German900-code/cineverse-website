import { useState, useEffect } from "react";
import { getPopularMovies, getTrendingMovies } from "../api/movies";
import { FaArrowCircleRight } from "react-icons/fa";
import LoadingSpinner from "../../public/gifs/infinity-loading.gif";

import MediaGrid from "./MediaGrid";
import NavButton from "./NavButton";
import Hero from "./Hero";

const Home = () => {
  const [heroMovie, setHeroMovie] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log("Is Loading: ", isLoading);
  useEffect(() => {
    const fetchData = async () => {
      // console.log("TRENDING DATA: ", heroMovie);
      // console.log("POPULAR DATA: ", popularMovies);
      setIsLoading(true);
      try {
        const trendingData = await getTrendingMovies();
        const popularData = await getPopularMovies();

        setHeroMovie(trendingData.results[0]);
        setPopularMovies(popularData.results);
        console.log("TRENDING DATA: ", trendingData);
        console.log("POPULAR DATA: ", popularData);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    console.log("HERO MOVIE: ", heroMovie);
    console.log("POPULAR MOVIES: ", popularMovies);

    fetchData();
    // setIsLoading(true);
    // try {
    //   getTrendingMovies().then((data) => setHeroMovie(data.results[0]));

    //   getPopularMovies().then((data) => setPopularMovies(data.results));
    // } catch (error) {
    //   console.error(error.message);
    // } finally {
    //   setIsLoading(false);
    // }
  }, []);

  // console.log("HERO MOVIE: ", heroMovie);
  // console.log("POPULAR MOVIES: ", popularMovies);
  return (
    <section>
      <Hero
        heroMovie={heroMovie}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <main className="mx-auto px-4 py-10 md:px-8 bg-black/90">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-50">Trending Movies</h2>
          {/* {isLoading && (
            <div className="flex items-center justify-center">
              <img src={LoadingSpinner} alt="Loading..." />
            </div>
          )} */}
          <NavButton
            path={"/trending"}
            label="View all trending movies"
            icon={<FaArrowCircleRight />}
          />
        </div>
        <MediaGrid
          media={popularMovies.slice(0, 5)}
          isLoading={isLoading}
          mediaType="movie"
        />
      </main>
    </section>
  );
};

export default Home;
