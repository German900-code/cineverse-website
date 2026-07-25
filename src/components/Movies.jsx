import Footer from "./Footer";
import Header from "./Header";
import MobileNav from "./MobileNav";
import MediaGrid from "./MediaGrid";
import MediaCard from "./MediaCard";
import { NavLink } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
// import { mediaData } from "../data/mediaData";
import NavButton from "./NavButton";
import { useState, useEffect } from "react";
import { getPopularTVShows } from "../api/tv";
import { getPopularMovies } from "../api/movies";
import LoadingSpinner from "../../public/gifs/infinity-loading.gif";

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
      {/* <MediaGrid
        movies={popularMovies}
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {/* <MediaGrid
        movies={popularMovies}
        title="Popular Movies"
        linkDirection="/movies"
        titleOfLink="View All"
        iconOfLinkDirection="right"
      ></MediaGrid> */}
      {/* <MediaGrid movies={popularMovies} title="Popular Movies">
        {popularMovies.slice(0, 5).map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </MediaGrid> */}
      <section className="mx-auto px-4 py-10 md:px-8 bg-black/90">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-50">Popular Movies</h2>

          <NavButton
            path={"/"}
            label="Back home"
            icon={<FaArrowCircleLeft />}
          />
        </div>
        {/* {isLoading && (
          <div className="flex items-center justify-center m-16">
            <img src={LoadingSpinner} alt="Loading..." />
          </div>
        )} */}
        <MediaGrid
          media={popularMovies}
          isLoading={isLoading}
          mediaType="movie"
          onRemoveFavorite={() => {}}
        />
      </section>
    </>
  );
};

export default Movies;
