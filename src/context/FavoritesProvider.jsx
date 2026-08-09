import { useEffect, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";
import { toast } from "react-toastify";

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  // const toastStyle = {
  //   backgroundColor: "#1e293b",
  //   color: "#f8fafc",
  //   border: "1px solid #334155",
  //   borderRadius: "12px",
  //   fontWeight: 500,
  // };

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

  const addFavorite = (item) => {
    console.log("ADD FAVORITE");
    // console.log("Adding favorite:", item);
    // const favoriteItem = {
    //   ...item,
    // };

    setFavorites((prev) => {
      const isFavorite = prev.some(
        (favorite) =>
          favorite.id === item.id && favorite.mediaType === item.mediaType,
      );

      if (isFavorite) return prev;

      console.log("ADDED FAVORITE:", item);
      // toast.success("Added to favorites", {
      //   position: "top-right",
      //   autoClose: 2000,
      // });

      return [...prev, item];
    });
    toast.success("Added to favorites ❤️", {
      // icon: "❤️",
      position: "top-right",
      autoClose: 2000,
      progressStyle: {
        background: "#f97316",
      },
      style: toastStyle,
    });
  };
  // const addFavorite = (item) => {
  //   console.log(item);
  //   const isFavorite = favorites.some((favorite) => favorite.id === item.id);
  //   if (!isFavorite) {
  //     setFavorites((prev) => [...prev, item]);
  //   }
  // };

  const removeFavorite = (id, mediaType) => {
    setFavorites((prev) =>
      prev.filter((item) => !(item.id === id && item.type === mediaType)),
    );
    toast.info("Removed from favorites 💔", {
      // icon: "💔",
      position: "top-right",
      progressStyle: {
        background: "#f97316",
      },
      autoClose: 2000,
      style: toastStyle,
    });
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
