import { useLocation, useParams } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { getMovieDetails } from "../api/movies";
import NavButton from "./NavButton";
import { getTVShowDetails } from "../api/tv";
import { FavoritesContext } from "../context/FavoritesContext";

const Details = () => {
  const { addFavorite, removeFavorite, favorites } =
    useContext(FavoritesContext);

  const { id } = useParams();
  const location = useLocation();

  const mediaType = location.pathname.split("/")[1];
  const [movie, setMovie] = useState(null);
  const [tvShow, setTVShow] = useState(null);

  useEffect(() => {
    if (mediaType === "movie") {
      getMovieDetails(id).then(setMovie);
    }
    if (mediaType === "tv-show") {
      getTVShowDetails(id).then(setTVShow);
    }
  }, [id, mediaType]);
  // useEffect(() => {
  //   getMovieDetails(id).then(setMovie);
  //   getTVShowDetails(id).then(setTVShow);
  // }, [id]);
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
          <img
            src={
              media?.poster_path
                ? `https://image.tmdb.org/t/p/w500${media.poster_path}`
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={media?.title || media?.name}
            className="w-full rounded-2xl shadow-lg shadow-cyan-500/20"
          />
          <div>
            <h1 className="text-4xl font-bold text-cyan-400">
              {media?.title || media?.name}
            </h1>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-300">
              <span>{media?.release_date?.split("-")[0]}</span>
              <span>⭐ {media?.vote_average?.toFixed(1)}</span>
              <span>
                Language: {media?.original_language?.toUpperCase() || "N/A"}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {/* {movie?.genre?.map((item) => ( */}
              <span className="rounded-full border border-cyan-500/30 px-3 py-1 text-sm text-cyan-300">
                {media?.genres?.[0]?.name || "No genre available"}
              </span>
              {/* ))} */}
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              {media?.overview ||
                media?.description ||
                "No description available."}
            </p>

            <button
              onClick={() => {
                console.log("click");
                addFavorite(
                  media
                    ? { ...movie, type: "movie" }
                    : { ...tvShow, type: "tv" },
                );
              }}
              className="mt-8 cursor-pointer rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              {/* { isFavorite ? "Added to favorites" : "Add to favorites" } */}
              Add to favorites
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Details;
