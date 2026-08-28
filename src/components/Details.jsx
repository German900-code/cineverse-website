import { useLocation, useParams } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { getMovieDetails } from "../api/movies";
import NavButton from "./NavButton";
import { getTVShowDetails } from "../api/tv";
import { FavoritesContext } from "../context/FavoritesContext";
import DetailsSkeleton from "./skeletons/DetailsSkeleton";
import { MEDIA_TYPE } from "../constants/mediaType";
import { motion } from "framer-motion";

const Details = () => {
  const { addFavorite } = useContext(FavoritesContext);

  const { id } = useParams();
  const location = useLocation();

  const mediaType = location.pathname.split("/")[1];
  const [movie, setMovie] = useState(null);
  const [tvShow, setTVShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (mediaType === MEDIA_TYPE.MOVIE) {
      getMovieDetails(id).then((data) => {
        setMovie(data);
        setIsLoading(false);
      });
    }
    if (mediaType === MEDIA_TYPE.TV_SHOW) {
      getTVShowDetails(id).then((data) => {
        setTVShow(data);
        setIsLoading(false);
      });
    }
  }, [id, mediaType]);

  if (isLoading) {
    return <DetailsSkeleton />;
  }
  const media = movie || tvShow;
  if (!media) {
    const missingType = !movie ? "Movie" : "TV Show";
    const backPath = !movie ? "/movies" : "/tv-shows";
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-red-400">Media not found</h1>
        <NavButton
          path={backPath}
          label={`Back to ${missingType}s`}
          icon={<FaArrowAltCircleLeft />}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10 ">
      <div className="mx-auto max-w-6xl">
        <NavButton
          path={movie ? "/movies" : "/tv-shows"}
          label={movie ? "Back to Movies" : "Back to TV Shows"}
          icon={<FaArrowAltCircleLeft />}
        />
        <section className="grid gap-8 md:grid-cols-[300px_1fr]">
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src={
              media?.poster_path
                ? `https://image.tmdb.org/t/p/w500${media.poster_path}`
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={media?.title || media?.name}
            whileHover={{ scale: 1.05, border: "1px solid white" }}
            className="w-full rounded-2xl shadow-lg shadow-cyan-500/20"
          />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h1 className="text-4xl font-bold text-cyan-400">
              {media?.title || media?.name || "No title available"}
            </h1>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-300">
              <span>{media?.release_date?.split("-")[0]}</span>
              <span>⭐ {media?.vote_average?.toFixed(1)}</span>
              <span>
                Language: {media?.original_language?.toUpperCase() || "N/A"}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-cyan-500/30 px-3 py-1 text-sm text-cyan-300">
                {media?.genres?.[0]?.name || "No genre available"}
              </span>
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              {media?.overview ||
                media?.description ||
                "No description available."}
            </p>

            <motion.button
              onClick={() => {
                addFavorite(
                  media
                    ? { ...movie, type: MEDIA_TYPE.MOVIE }
                    : { ...tvShow, type: MEDIA_TYPE.TV_SHOW },
                );
              }}
              whileHover={{ border: "1px solid white" }}
              transition={{ duration: 0.8 }}
              className="mt-8 cursor-pointer rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Add to Favorites
            </motion.button>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default Details;
