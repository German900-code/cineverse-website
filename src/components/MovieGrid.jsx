import { NavLink } from "react-router-dom";
import MediaCard from "./MediaCard";
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import { mediaData } from "../data/mediaData";

const MovieGrid = () => {
  return (
    <section className="mx-auto px-4 py-10 md:px-8 bg-black/90">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-50">Trending Movies</h2>
        <NavLink
          to={"/trending"}
          className="flex flex-row cursor-pointer hover:underline  hover:text-cyan-500 rounded-full p-5 text-sm font-medium text-cyan-400 transition-colors duration-300 "
        >
          <span className="flex items-center gap-2">
            <FaArrowCircleRight />
            <p>View All</p>
          </span>
        </NavLink>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {mediaData
          .filter((item) => item.type === "movie")
          .map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
      </div>
    </section>
  );
};

export default MovieGrid;
