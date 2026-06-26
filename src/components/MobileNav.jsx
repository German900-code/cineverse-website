import { FiHome, FiFilm, FiTv, FiHeart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  const navItems = [
    { icon: <FiHome size={21} />, label: "Home", path: "/" },
    { icon: <FiFilm size={21} />, label: "Movies", path: "/movies" },
    { icon: <FiTv size={21} />, label: "Shows", path: "/tv-shows" },
    { icon: <FiHeart size={21} />, label: "Favorites", path: "/favorites" },
  ];

  return (
    <nav className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-7 rounded-full border border-white/10 bg-slate-950/80 px-6 py-3 text-white/60 shadow-lg backdrop-blur-md md:hidden ">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `
           flex flex-col items-center text-xs transition-colors shadow-2xl  rounded-full duration-300 ${isActive ? "text-cyan-400 before:bg-[radial-gradient(circle_at_center,rgba(80,120,140,0.25)_0%,rgba(80,120,140,0.25)_35%,transparent_70%)] shadow-[0_0_25px_rgba(80,120,140,0.25)]" : "text-white/60"}`
          }
        >
          {item.icon}
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default MobileNav;
