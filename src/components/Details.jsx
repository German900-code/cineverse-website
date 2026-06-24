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
import { mediaData } from "../data/mediaData";
import NavButton from "./NavButton";

const Details = () => {
  const { id } = useParams();

  const movie = mediaData.find((item) => String(item.id) === id);

  if (!movie) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-red-400">Movie not found</h1>
        <NavButton
          path={"/movies"}
          label="Back to movies"
          icon={<FaArrowAltCircleLeft />}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10 ">
      <div className="mx-auto max-w-6xl">
        <NavButton
          path={"/movies"}
          label="Back to movies"
          icon={<FaArrowAltCircleLeft />}
        />
        <section className="grid gap-8 md:grid-cols-[300px_1fr]">
          <img
            src={movie?.imageUrl}
            alt={movie?.title}
            className="w-full rounded-2xl shadow-lg shadow-cyan-500/20"
          />
          <div>
            <h1 className="text-4xl font-bold text-cyan-400">{movie?.title}</h1>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-300">
              <span>{movie?.releaseYear}</span>
              <span>⭐ {movie?.rating}</span>
              <span>{movie?.duration}</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {movie?.genre?.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-500/30 px-3 py-1 text-sm text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              {movie?.description}
            </p>

            <button className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
              Add to Favorites
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Details;
