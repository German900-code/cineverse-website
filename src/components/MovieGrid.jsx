import { NavLink } from "react-router-dom";
import MovieCard from "./MovieCard";

const movies = [
  {
    id: 1,
    title: "Dune: Part Two",
    year: "2024",
    rating: 8.2,
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    year: "2014",
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: "2008",
    rating: 9.0,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 4,
    title: "Spider-Man: Across the Spider-Verse",
    year: "2023",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
  },
];

const MovieGrid = () => {
  return (
    <section className="mx-auto  px-4 py-10 md:px-8 bg-black/90">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-50">Trending Movies</h2>
        <NavLink
          to={"/trending"}
          className="cursor-pointer hover:underline  hover:text-cyan-500 rounded-full p-5 text-sm font-medium text-cyan-400 transition-colors duration-300 "
        >
          View All
        </NavLink>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieGrid;
