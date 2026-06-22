import Footer from "./Footer";
import Header from "./Header";
import MobileNav from "./MobileNav";
import MediaCard from "./MediaCard";
import { NavLink } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { mediaData } from "../data/mediaData";
import NavButton from "./NavButton";

const Movies = () => {
  return (
    <>
      <section className="mx-auto px-4 py-10 md:px-8 bg-black/90">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-50">Popular Movies</h2>

          <NavButton
            path={"/"}
            label="Back home"
            icon={<FaArrowCircleLeft />}
          />
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
