import { FiFilm, FiSearch, FiAlertCircle, FiTrash } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChangeValue = (e) => {
    setInputValue(e.target.value);

    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    const trimmedValue = inputValue.trim();
    e.preventDefault();
    if (!trimmedValue) {
      setError("Please enter a movie or TV show name");

      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    setError("");
    navigate(`/search?query=${encodeURIComponent(trimmedValue)}`);
    setInputValue("");
    setIsVisible(false);
  };

  const navItems = [
    { label: "Movies", path: "/movies" },
    { label: "TV Shows", path: "/tv-shows" },
    { label: "Favorites", path: "/favorites" },
  ];

  useEffect(() => {
    if (!error) return;

    const timer = () => {
      setTimeout(() => {
        setError("");
      }, 3000);
    };

    return () => clearTimeout(timer);
  }, [error]);

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
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <form
          onSubmit={handleSubmit}
          className="hidden gap-2 md:flex flex-wrap"
        >
          <div className="flex flex-col">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={handleChangeValue}
                placeholder={
                  error
                    ? "Movie or TV show name is required"
                    : "Start typing to search..."
                }
                className={`h-12 w-80 rounded-full border ${error ? "border-red-500 shadow-red-500/20" : "border-cyan-500/30 focus:shadow-cyan-500/20"} bg-slate-900 px-5 text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20`}
              />
              <div className="flex h-12 overflow-hidden rounded-full">
                <button
                  type="submit"
                  className="flex h-full items-center justify-center gap-2 bg-cyan-500 px-7 font-medium text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30 cursor-pointer"
                >
                  <FiSearch size={22} />
                  Search
                </button>

                <button
                  type="button"
                  onClick={() => setInputValue("")}
                  className="flex h-full w-16 shrink-0 items-center justify-center bg-slate-600 hover:bg-red-500 text-slate-950 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 cursor-pointer"
                >
                  <FiTrash size={20} />
                </button>
              </div>
            </div>
            {error && (
              <span className="mt-2 text-center text-sm text-red-400 flex flex-row items-center gap-2 transition-all duration-300">
                <FiAlertCircle /> {error}
              </span>
            )}
          </div>
        </form>

        {/* Mobile search */}
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col gap-2 overflow-hidden transition-all duration-300 md:hidden ${
            isVisible ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={handleChangeValue}
                placeholder={
                  error
                    ? "Movie or TV show name is required"
                    : "Start typing to search..."
                }
                className={`h-12 w-full rounded-full border ${error ? "border-red-500" : "border-cyan-500/30"} bg-slate-900 px-5 text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20`}
              />
              <div className="flex gap-2">
                <button
                  className="flex order-1 h-12 items-center justify-center gap-2 rounded-full bg-red-500 px-6 font-medium text-slate-950 transition-all duration-300 hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/30 cursor-pointer"
                  onClick={() => setInputValue("")}
                >
                  <FiTrash />
                </button>

                <button
                  type="submit"
                  className="flex flex-1 h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 font-medium text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30 cursor-pointer"
                >
                  <FiSearch />
                  Search
                </button>
              </div>
            </div>
            {error && (
              <span
                className=" text-center text-sm text-red-400 flex justify-center items-center gap-2 animate-in
fade-in
duration-200"
              >
                <FiAlertCircle /> {error}
              </span>
            )}
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
