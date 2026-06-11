import { FiFilm, FiSearch } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-black/90 px-4 py-4 backdrop-blur-md shadow-cyan-300/20 shadow-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-around gap-y-5">
        <div className="flex justify-between items-center p-3">
          <h1 className="flex items-center gap-2 text-2xl font-bold text-cyan-400">
            <FiFilm className="text-cyan-300" />
            CineWave
          </h1>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="w-auto text-center md:hidden flex justify-center"
          >
            {isVisible ? (
              <FaArrowUp
                className="text-slate-300 transition-all duration-300"
                size={30}
              />
            ) : (
              <FiSearch
                className="text-slate-300 transition-all duration-300"
                size={30}
              />
            )}
          </button>
        </div>

        <nav className="md:flex items-center justify-around gap-8 text-sm font-medium md:justify-between hidden ">
          <button className="text-slate-300 transition-colors duration-300 hover:text-cyan-400 cursor-pointer">
            Movies
          </button>
          <button className="text-slate-300 transition-colors duration-300 hover:text-cyan-400 cursor-pointer">
            TV Shows
          </button>
          <button className="text-slate-300 transition-colors duration-300 hover:text-cyan-400 cursor-pointer">
            Favorites
          </button>
        </nav>
        <form className="hidden gap-2 md:flex">
          <input
            type="text"
            placeholder="Enter movie name"
            className="h-12 w-80 rounded-full border border-cyan-500/30 bg-slate-900 px-5 text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20"
          />

          <button
            type="submit"
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 font-medium text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30 cursor-pointer"
          >
            <FiSearch />
            Search
          </button>
        </form>

        {/* Mobile search */}
        <form
          className={`flex flex-col gap-2 overflow-hidden transition-all duration-300 md:hidden ${
            isVisible ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <input
            type="text"
            placeholder="Enter movie name"
            className="h-12 w-full rounded-full border border-cyan-500/30 bg-slate-900 px-5 text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20"
          />

          <button
            type="submit"
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 font-medium text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30 cursor-pointer"
          >
            <FiSearch />
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
