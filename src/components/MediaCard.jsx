import { useContext, useEffect, useState } from "react";
import { FaArrowCircleRight, FaHeart } from "react-icons/fa";
import NavButton from "./NavButton";
import { FavoritesContext } from "../context/FavoritesContext";

const MediaCard = ({ item, mediaType }) => {
  const { addFavorite, removeFavorite, favorites } =
    useContext(FavoritesContext);

  const isFavorite = favorites.some(
    (favorite) => favorite.id === item.id && favorite.type === mediaType,
  );
  // const addToFavorites = () => {
  //   const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  //   const alreadyExists = savedFavorites.some(
  //     (favorite) => favorite.id === item.id,
  //   );

  //   if (alreadyExists) {
  //     const filteredFavorites = savedFavorites.filter(
  //       (favorite) => favorite.id !== item.id,
  //     );

  //     localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
  //     onRemoveFavorite?.(item.id);
  //     setIsFavorite(false);
  //   } else {
  //     const favoriteItem = { ...item, type: mediaType };
  //     localStorage.setItem(
  //       "favorites",
  //       JSON.stringify([...savedFavorites, favoriteItem]),
  //     );
  //     setIsFavorite(true);
  //   }
  // };

  // useEffect(() => {
  //   const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  //   const ifExist = savedFavorites.some((favorite) => favorite.id === item.id);
  //   // onRemoveFavorite?.(item.id);
  //   if (ifExist) {
  //     setIsFavorite(true);
  //   } else {
  //     setIsFavorite(false);
  //   }
  // }, [item.id]);
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-cyan-500/20 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt={item.title || item.name}
          className="h-65 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"
        />
      </div>
      <div className="p-4">
        <h3 className="line-clamp-1 text-base font-semibold text-slate-50">
          {item.title || item.name}
        </h3>
        <div className="mt-3 flex items-center justify-between text-sm text-slate-400">
          <span className="text-yellow-500">
            ⭐ {item.rating || Math.floor(item.vote_average)}
          </span>
          <span>
            {new Date(item.release_date || item.first_air_date).getFullYear()}
          </span>
          <button
            onClick={() =>
              isFavorite
                ? removeFavorite(item.id, mediaType)
                : addFavorite({ ...item, type: mediaType })
            }
            className="cursor-pointer"
          >
            <FaHeart
              className={`text-2xl ${isFavorite ? "text-red-500" : "text-slate-500"}`}
            />
          </button>
        </div>
        <NavButton
          path={`/${mediaType}/${item.id}`}
          label="View details"
          icon={<FaArrowCircleRight />}
        />
      </div>
    </article>
  );
};

export default MediaCard;
