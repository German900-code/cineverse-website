import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[420px] overflow-hidden bg-slate-950 px-4 py-10 text-white md:min-h-[520px] md:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[url('https://image.tmdb.org/t/p/original/8rpDcsfLJypbO6vREc0547VKqEv.jpg')] bg-cover bg-center opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end pt-32 md:pt-48">
        <span className="mb-4 w-[50%] md:w-fit text-center rounded-full border border-cyan-500/30 bg-cyan500/10 px-4 py-2 text-sm font-medium text-cyan-300">
          🔥 Trending now
        </span>
        <h2 className="max-w-2xl text-4xl font-bold md:text-6xl">Avatar</h2>
        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 md:text-base">
          Jake Sully and Neytiri have formed a family and are doing everything
          to stay together. However, they must leave their home and explore the
          regions of Pandora. When an ancient threat resurfaces, Jake must fight
          a difficult war against the humans.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <span>⭐ 7.9</span>
          <span>2024</span>
          <span>Sci-Fi</span>
        </div>
        <button className="mt-6 w-[50%] md:w-fit rounded-full cursor-pointer bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
          <Link to={"/details"}>View Details</Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
