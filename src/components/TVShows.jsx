import Footer from "./Footer";
import Header from "./Header";
import MobileNav from "./MobileNav";
import MediaCard from "./MediaCard";
import { NavLink } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

const TVShows = () => {
  const tvShowList = [
    {
      id: 1,
      type: "tv",
      title: "Off Campus",
      year: "2026",
      rating: 8.0,
      poster:
        "https://www.themoviedb.org/t/p/w1280/cbODFqkcmRgrYH8NkG4Q4Hcg8Z1.jpg",
    },
    {
      id: 2,
      type: "tv",
      title: "The Last of Us",
      year: "2023",
      rating: 9.2,
      poster:
        "https://www.themoviedb.org/t/p/w1280/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg",
    },
    {
      id: 3,
      type: "tv",
      title: "Dutton Ranch",
      year: "2026",
      rating: 8.4,
      poster:
        "https://www.themoviedb.org/t/p/w1280/xsiecCxd8lkcAluw0wWwbW5CwSv.jpg",
    },
  ];
  return (
    <section className="mx-auto px-4 py-10 md:px-8 bg-black/90">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-50">Popular TV Shows</h2>
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
        {tvShowList.map((tvShow) => (
          <MediaCard key={tvShow.id} item={tvShow} />
        ))}
      </div>
    </section>
  );
};

export default TVShows;
