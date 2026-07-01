import { FaArrowAltCircleLeft, FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import MediaCard from "./MediaCard";
import NavButton from "./NavButton";

const Favorites = () => {
  const [favoritesMovies, setFavoritesMovies] = useState([]);
  const [favoritesTVShows, setFavoritesTVShows] = useState([]);

  const handleRemoveFavorite = (id) => {
    const updatedFavoritesMovies = favoritesMovies.filter(
      (item) => item.id !== id,
    );
    const updatedFavoritesShows = favoritesTVShows.filter(
      (item) => item.id !== id,
    );

    setFavoritesMovies(updatedFavoritesMovies);
    setFavoritesTVShows(updatedFavoritesShows);
  };

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoritesMovies(savedFavorites.filter((item) => item.type === "movie"));
    setFavoritesTVShows(
      savedFavorites.filter((item) => item.type === "tv-show"),
    );
  }, []);

  return (
    <section className="min-h-screen px-4 py-8">
      {favoritesMovies.length === 0 && favoritesTVShows.length === 0 && (
        <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
          <FaHeart className="mb-4 text-5xl text-slate-700 " />
          <h3 className="text-2xl font-semibold text-slate-300">
            No favorites yet
          </h3>
          <p className="mt-2 max-w-max text-slate-500">
            Movies and TV shows you like will appear here
          </p>
          <NavButton
            path={"/"}
            label="Back home"
            icon={<FaArrowAltCircleLeft />}
          />
        </div>
      )}
      {favoritesMovies.length > 0 && (
        <>
          <div className="flex flex-col items-center gap-3 mb-5 mt-5 justify-between md:flex-row">
            <div className="flex items-center gap-3 ">
              <FaHeart className="text-2xl text-red-500" />
              <h2 className="text-2xl text-white">Your Favorite Movies</h2>
            </div>

            <NavButton
              path={"/"}
              label="Back home"
              icon={<FaArrowAltCircleLeft />}
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {favoritesMovies.map((item) => (
              <MediaCard
                key={item.id}
                item={item}
                onRemoveFavorite={handleRemoveFavorite}
              />
            ))}
          </div>
        </>
      )}
      {favoritesMovies.length > 0 && favoritesTVShows.length > 0 && (
        <hr className="my-8 border-slate-600" />
      )}
      {favoritesTVShows.length > 0 && (
        <>
          <div className="flex flex-col items-center gap-3 mb-5 mt-5 md:flex-row">
            <FaHeart className="text-2xl text-red-500" />
            <h2 className="text-2xl text-white">Your Favorite TV Shows</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {favoritesTVShows.map((item) => (
              <MediaCard
                key={item.id}
                item={item}
                onRemoveFavorite={handleRemoveFavorite}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Favorites;
