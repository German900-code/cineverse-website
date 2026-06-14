import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col gap-y-20 items-center mt-20 p-10 h-40">
      <h1 className="text-white font-bold text-4xl text-center">
        Page are you looking for does not exist ❌
      </h1>
      <Link to={"/"}>
        <button className="h-20 rounded-full text-2xl bg-cyan-400 px-6 font-medium text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30 cursor-pointer">
          Go back home page
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
