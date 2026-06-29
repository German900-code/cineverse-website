// import { useParams } from "react-router-dom";

// const Details = () => {
//   const { id } = useParams();

//   return (
//     <main className="min-h-screen bg-black text-white flex items-center justify-center">
//       <h1 className="text-4xl text-cyan-400">Details page: {id}</h1>
//     </main>
//   );
// };

// export default Details;

import { NavLink, useParams } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getMovieDetails, getPopularMovies } from "../api/tmdb";
import NavButton from "./NavButton";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  // const movie = movies.find((item) => String(item.id) === id);

  if (!movie) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-red-400">Movie not found</h1>
        <NavButton
          path={"/"}
          label="Back home"
          icon={<FaArrowAltCircleLeft />}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10 ">
      <div className="mx-auto max-w-6xl">
        <NavButton
          path={"/"}
          label="Back home"
          icon={<FaArrowAltCircleLeft />}
        />
        <section className="grid gap-8 md:grid-cols-[300px_1fr]">
          <img
            src={
              movie?.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={movie?.title || movie?.name}
            className="w-full rounded-2xl shadow-lg shadow-cyan-500/20"
          />
          <div>
            <h1 className="text-4xl font-bold text-cyan-400">
              {movie?.title || movie?.name}
            </h1>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-300">
              <span>{movie?.release_date?.split("-")[0]}</span>
              <span>⭐ {movie?.vote_average?.toFixed(1)}</span>
              <span>
                Language: {movie?.original_language?.toUpperCase() || "N/A"}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {/* {movie?.genre?.map((item) => ( */}
              <span className="rounded-full border border-cyan-500/30 px-3 py-1 text-sm text-cyan-300">
                {movie?.genres?.[0]?.name || "No genre available"}
              </span>
              {/* ))} */}
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              {movie?.overview ||
                movie?.description ||
                "No description available."}
            </p>

            <button className="mt-8 cursor-pointer rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
              Add to Favorites
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Details;
