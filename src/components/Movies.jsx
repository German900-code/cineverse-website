import MediaGrid from "./MediaGrid";
import { FaArrowCircleLeft } from "react-icons/fa";
import NavButton from "./NavButton";
import { useState, useEffect } from "react";
import { getPopularMovies } from "../api/movies";
import { MEDIA_TYPE } from "../constants/mediaType";

const Movies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const popularData = await getPopularMovies();
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
    <>
      <section className="mx-auto px-4 py-10 md:px-8 bg-black/90">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-50">Popular Movies</h2>

          <NavButton
            path={"/"}
            label="Back home"
            icon={<FaArrowCircleLeft />}
          />
        </div>
        <MediaGrid
          media={popularMovies}
          isLoading={isLoading}
          mediaType={MEDIA_TYPE.MOVIE}
          onRemoveFavorite={() => {}}
        />
      </section>
    </>
  );
};

export default Movies;
