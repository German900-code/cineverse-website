import MediaCard from "./MediaCard";
import { FaArrowCircleLeft } from "react-icons/fa";
// import { mediaData } from "../data/mediaData";
import NavButton from "./NavButton";
import { useEffect, useState } from "react";
// import { getPopularMovies } from "../api/tmdb";
import { getPopularMovies, getTrendingMovies } from "../api/movies";
import MediaGrid from "./MediaGrid";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const trendingMoviesData = await getTrendingMovies();
        setMovies(trendingMoviesData.results);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // getPopularMovies().then((data) => setMovies(data.results));
  }, []);
  return (
    <section className="mx-auto px-4 py-10 md:px-8 bg-black/90">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-50">Trending Movies</h2>
        <NavButton path={"/"} label="Back home" icon={<FaArrowCircleLeft />} />
      </div>
      <MediaGrid
        mediaType="movie"
        isLoading={isLoading}
        media={movies}
        onRemoveFavorite={() => {}}
      />
      {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie) => (
          <MediaCard key={movie.id} item={movie} />
        ))}
      </div> */}
    </section>
  );
};

export default TrendingMovies;
