import { useEffect, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";
import { toast } from "react-toastify";

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const toastStyle = {
    background: "#1e293b",
    color: "#f8fafc",
    border: "1px solid #334155",
    borderRadius: "12px",
    fontWeight: 500,
    fontSize: "14px",
    padding: "12px 16px",
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log("Favorites saved to localStorage:", favorites);
  }, [favorites]);

  const isFavorite = (id, mediaType) => {
    return favorites.some(
      (favorite) => favorite.id === id && favorite.mediaType === mediaType,
    );
  };

  // const toggleFavorite = (item) => {
  //   if (isFavorite(item.id, item.mediaType)) {
  //     removeFavorite(item.id, item.mediaType);
  //   } else {
  //     addFavorite(item);
  //   }
  // };

  const removeFavoriteSilently = (id, mediaType) => {
    setFavorites((prev) =>
      prev.filter((item) => !(item.id === id && item.type === mediaType)),
    );
  };

  const addFavorite = (item) => {
    console.log("ADD FAVORITE");

    setFavorites((prev) => {
      const isFavorite = prev.some(
        (favorite) =>
          favorite.id === item.id && favorite.mediaType === item.mediaType,
      );

      if (isFavorite) return prev;

      console.log("ADDED FAVORITE:", item);

      return [...prev, item];
    });
    toast.success(
      <div className="flex flex-col justify-content gap-4">
        <span>{`"${item?.title || item?.name}" added to favorites 🧡`}</span>
        <button
          onClick={() => removeFavoriteSilently(item.id, item.type)}
          className="cursor-pointer font-semibold text-orange-400 transition-colors hover:text-orange-300"
        >
          Undo
        </button>
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
        progressStyle: {
          background: "#f97316",
        },
        style: toastStyle,
      },
    );
  };

  const removeFavorite = (id, mediaType) => {
    const itemToRemove = favorites.find(
      (item) => item.id === id && item.type === mediaType,
    );
    removeFavoriteSilently(id, mediaType);
    // setFavorites((prev) =>
    //   prev.filter((item) => !(item.id === id && item.type === mediaType)),
    // );
    toast.info(
      `"${itemToRemove?.title || itemToRemove?.name}" removed from favorites 💔`,

      {
        position: "top-right",
        progressStyle: {
          background: "#f97316",
        },
        autoClose: 2000,
        style: toastStyle,
      },
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        // toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
