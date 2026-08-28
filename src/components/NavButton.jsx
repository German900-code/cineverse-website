import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavButton = ({ path, label, icon }) => {
  return (
    <NavLink
      to={path}
      className=" hover:underline  hover:text-cyan-500 rounded-full p-5 text-sm font-medium text-cyan-400 transition-colors duration-300 "
    >
      <motion.button
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        className="flex items-center gap-2 cursor-pointer"
      >
        <motion.span
        // initial={{ opacity: 0, x: -30 }}
        // animate={{ opacity: 1, x: 0 }}
        // transition={{ duration: 0.5 }}
        // className="hover:rotate-180"
        >
          {icon}
        </motion.span>
        <p>{label}</p>
      </motion.button>
    </NavLink>
  );
};

export default NavButton;
