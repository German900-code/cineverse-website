import { FaArrowAltCircleLeft, FaHeart } from "react-icons/fa";
import { FavoritesContext } from "../context/FavoritesContext";
import { useContext } from "react";
import MediaGrid from "./MediaGrid";
import NavButton from "./NavButton";
import { MEDIA_TYPE } from "../constants/mediaType";

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);
  const favoriteMovies = favorites.filter(
    (item) => item.type === MEDIA_TYPE.MOVIE,
  );
  const favoriteTVShows = favorites.filter(
    (item) => item.type === MEDIA_TYPE.TV_SHOW,
  );

  return (
    <section className="min-h-screen px-4 py-8">
      {favorites.length === 0 && (
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
      {favoriteMovies.length > 0 && (
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
          <MediaGrid
            media={favoriteMovies}
            mediaType={MEDIA_TYPE.MOVIE}
            onRemoveFavorite={removeFavorite}
          />
        </>
      )}
      {favoriteMovies.length > 0 && favoriteTVShows.length > 0 && (
        <hr className="my-8 border-slate-600" />
      )}
      {favoriteTVShows.length > 0 && (
        <>
          <div className="flex flex-col items-center gap-3 mb-5 mt-5 justify-between md:flex-row">
            <div className="flex items-center gap-3 ">
              <FaHeart className="text-2xl text-red-500" />
              <h2 className="text-2xl text-white">Your Favorite TV Shows</h2>
            </div>

            <NavButton
              path={"/"}
              label="Back home"
              icon={<FaArrowAltCircleLeft />}
            />
          </div>

          <MediaGrid
            media={favoriteTVShows}
            mediaType={MEDIA_TYPE.TV_SHOW}
            onRemoveFavorite={removeFavorite}
          />
        </>
      )}
    </section>
  );
};

export default Favorites;
