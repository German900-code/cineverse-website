import Footer from "./Footer";
import Header from "./Header";
import MobileNav from "./MobileNav";
import MediaCard from "./MediaCard";
import { NavLink } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { mediaData } from "../data/mediaData";

const Movies = () => {
  return (
    <>
      <section className="mx-auto px-4 py-10 md:px-8 bg-black/90">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-50">Popular Movies</h2>
          <NavLink
            to={"/"}
            className="cursor-pointer hover:underline  hover:text-cyan-500 rounded-full p-5 text-sm font-medium text-cyan-400 transition-colors duration-300 "
          >
            <span className="flex items-center gap-2">
              <FaArrowCircleLeft />
              <p>Back home</p>
            </span>
          </NavLink>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {mediaData
            .filter((item) => item.type === "movie")
            .map((movie) => (
              <MediaCard key={movie.id} item={movie} />
            ))}
        </div>
      </section>
    </>
  );
};

export default Movies;
