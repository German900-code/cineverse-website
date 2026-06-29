import { NavLink } from "react-router-dom";

const NavButton = ({ path, label, icon }) => {
  return (
    <NavLink
      to={path}
      className="cursor-pointer hover:underline  hover:text-cyan-500 rounded-full p-5 text-sm font-medium text-cyan-400 transition-colors duration-300 "
    >
      <div className="flex items-center gap-2">
        {icon}
        <p>{label}</p>
      </div>
    </NavLink>
  );
};

export default NavButton;
