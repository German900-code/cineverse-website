import Footer from "./Footer";
import Header from "./Header";
import MobileNav from "./MobileNav";
import MediaCard from "./MediaCard";
import { NavLink } from "react-router-dom";
const TVShows = () => {
  const tvShowList = [
    {
      id: 1,
      title: "Off Campus",
      year: "2026",
      rating: 8.0,
      poster:
        "https://www.imdb.com/title/tt33546863/mediaviewer/rm1327745538/?ref_=ext_shr_lnk",
    },
  ];
  return (
    <>
      <Header />
      <section className="mx-auto px-4 py-10 md:px-8 bg-black/90">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-50">Popular TV Shows</h2>
          <NavLink
            to={"/"}
            className="cursor-pointer hover:underline  hover:text-cyan-500 rounded-full p-5 text-sm font-medium text-cyan-400 transition-colors duration-300 "
          >
            Back home
          </NavLink>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {tvShowList.map((tvShow) => (
            <MediaCard key={tvShow.id} item={tvShow} />
          ))}
        </div>
      </section>
      <MobileNav />
      <Footer />
    </>
  );
};

export default TVShows;
