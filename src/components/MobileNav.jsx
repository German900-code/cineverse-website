import { FiHome, FiFilm, FiTv, FiHeart } from "react-icons/fi";

const MobileNav = () => {
  return (
    <nav className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-7 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-white/60 shadow-lg backdrop-blur-md md:hidden">
      {/* <div className="w-full flex justify-evenly text-slate-300"> */}
      <button className="flex flex-col items-center">
        <FiHome size={21} />
        <a href="#">Home</a>{" "}
      </button>
      <button className="flex flex-col items-center">
        <FiFilm size={21} />
        <a href="#">Movies</a>
      </button>
      <button className="flex flex-col items-center">
        <FiTv size={21} />
        <a href="#"> Shows</a>
      </button>
      <button className="flex flex-col items-center">
        <FiHeart size={21} />
        <a href="#">Favorites</a>
      </button>
      {/* </div> */}
    </nav>
  );
};

export default MobileNav;
