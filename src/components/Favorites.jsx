import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import MediaCard from "./MediaCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <section className="min-h-screen px-4 py-8">
      {favorites.length === 0 ? (
        <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
          <FaHeart className="mb-4 text-5xl text-slate-700 " />
          <h3 className="text-2xl font-semibold text-slate-300">
            No favorites yet
          </h3>
          <p className="mt-2 max-w-max text-slate-500">
            Movies and TV shows you like will appear here
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-row items-center gap-3 mb-5">
            <FaHeart className="text-2xl text-red-500" />
            <h2 className="text-2xl text-slate-500">Your Favorites</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {favorites.map((item) => (
              <MediaCard key={item.id} item={item} favorites={favorites} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Favorites;
