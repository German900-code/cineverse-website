import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      url: "https://github.com/German900-code",
      icon: <FaGithub className="text-white" />,
    },
    {
      id: 2,
      url: "https://www.linkedin.com/",
      icon: <FaLinkedin className="text-cyan-700" />,
    },
    {
      id: 3,
      url: "https://www.facebook.com/",
      icon: <FaFacebook className="text-blue-600" />,
    },
  ];

  return (
    <footer className="border-t border-white/10 pt-3 pb-3 text-center text-sm text-white/60 rounded-t-3xl w-[90%] mx-auto bg-slate-950/80 md:w-[95%] lg:w-[90%]">
      <div className="flex gap-3 justify-center mt-3 mb-3 text-xl text-white/60">
        {socialLinks.map((link) => (
          <NavLink to={link.url} key={link.id} target="_blank">
            <motion.span
              whileHover={{ scale: 0.9 }}
              transition={{ duration: 0.7 }}
            >
              {link.icon}
            </motion.span>
          </NavLink>
        ))}
      </div>
      <p>Made with 🩵 by German</p>
      <p className="mt-3">Movies data provided by TMDB API</p>
      <p className="mt-3">© {new Date().getFullYear()} CineWave Application</p>
    </footer>
  );
};

export default Footer;
