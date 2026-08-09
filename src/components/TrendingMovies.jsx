import { FaArrowCircleLeft } from "react-icons/fa";
import NavButton from "./NavButton";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api/movies";
import MediaGrid from "./MediaGrid";
import { MEDIA_TYPE } from "../constants/mediaType";

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
  }, []);
  return (
    <section className="mx-auto px-4 py-10 md:px-8 bg-black/90">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-50">Trending Movies</h2>
        <NavButton path={"/"} label="Back home" icon={<FaArrowCircleLeft />} />
      </div>
      <MediaGrid
        mediaType={MEDIA_TYPE.MOVIE}
        isLoading={isLoading}
        media={movies}
        onRemoveFavorite={() => {}}
      />
    </section>
  );
};

export default TrendingMovies;
