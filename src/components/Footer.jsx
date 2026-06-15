import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 pt-3 text-center text-sm text-white/60">
      <div className="flex gap-3 justify-center mt-3 mb-3 text-xl text-white/60">
        <Link to={"https://github.com/German900-code"} target="_blank">
          <FaGithub className="text-white" />
        </Link>
        <Link to={"https://www.linkedin.com/"} target="_blank">
          <FaLinkedin className="text-cyan-600" />
        </Link>
        <Link to={"https://www.facebook.com/"} target="_blank">
          <FaFacebook className="text-blue-600" />
        </Link>
      </div>
      <p>Made with 🩵 by German</p>
      <p className="mt-3">Movies data provided by IMDb</p>
      <p className="mt-3">© {new Date().getFullYear()} CineWave Application</p>
    </footer>
  );
};

export default Footer;
