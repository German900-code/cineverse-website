import { FiFilm, FiSearch } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChangeValue = (e) => {
    setInputValue(e.target.value);
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) return;

    navigate(`/search?query=${encodeURIComponent(trimmedValue)}`);
    setInputValue("");
    setIsVisible(false);
  };

  const navItems = [
    { label: "Movies", path: "/movies" },
    { label: "TV Shows", path: "/tv-shows" },
    { label: "Favorites", path: "/favorites" },
  ];

  return (
    <header className="sticky top-2 z-50 border-b rounded-b-3xl rounded-t-3xl  px-4 py-3 backdrop-blur-xl border border-cyan-500/15 shadow-cyan-300/20 shadow-md w-[90%] mx-auto bg-slate-950/80 md:w-[95%] lg:w-[90%]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-around gap-y-5">
        <div className="flex justify-between items-center p-3">
          <h1 className="flex items-center gap-2 text-3xl font-bold text-cyan-400">
            <FiFilm className="text-cyan-300" />
            <Link to={"/"}>CineWave</Link>
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
          {navItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center text-xl transition-colors duration-300 ${isActive ? "text-cyan-400 underline" : "text-white/60"} hover:text-cyan-500`
              }
              // className="text-slate-300 transition-colors duration-300 hover:text-cyan-400 cursor-pointer "
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <form onSubmit={handleSubmit} className="hidden gap-2 md:flex">
          <input
            type="text"
            value={inputValue}
            onChange={handleChangeValue}
            placeholder="Enter movie or TV show name"
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
          onSubmit={handleSubmit}
          className={`flex flex-col gap-2 overflow-hidden transition-all duration-300 md:hidden ${
            isVisible ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <input
            type="text"
            value={inputValue}
            onChange={handleChangeValue}
            placeholder="Enter movie or TV show name"
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
