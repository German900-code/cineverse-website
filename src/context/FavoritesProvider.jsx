import { useEffect, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // useEffect(() => {
  //   const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  //   setFavorites(savedFavorites);
  //   console.log("Favorites loaded from localStorage:", savedFavorites);
  // }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log("Favorites saved to localStorage:", favorites);
  }, [favorites]);

  const addFavorite = (item) => {
    console.log("Adding favorite:", item);
    // const favoriteItem = {
    //   ...item,
    // };

    setFavorites((prev) => {
      const isFavorite = prev.some(
        (favorite) =>
          favorite.id === item.id && favorite.mediaType === item.mediaType,
      );

      if (isFavorite) return prev;

      return [...prev, item];
    });
  };
  // const addFavorite = (item) => {
  //   console.log(item);
  //   const isFavorite = favorites.some((favorite) => favorite.id === item.id);
  //   if (!isFavorite) {
  //     setFavorites((prev) => [...prev, item]);
  //   }
  // };

  const removeFavorite = (id, type) => {
    setFavorites((prev) =>
      prev.filter((item) => !(item.id === id && item.type === type)),
    );
    // const updatedFavorites = favorites.filter((item) => item.id !== id);
    // setFavorites(updatedFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
