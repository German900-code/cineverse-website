const HeroSkeleton = () => {
  return (
    <section className="animate-pulse relative min-h-[420px] overflow-hidden bg-slate-800 px-4 py-10 text-white md:min-h-[520px] md:px-8 lg:px-12">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
      <div
        className={`absolute inset-0 bg-cover bg-center opacity-80`}
        // style={{
        //   backgroundImage: `url(https://image.tmdb.org/t/p/w500${heroMovie.backdrop_path})`,
        // }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end pt-32 md:pt-48">
        <span className="mb-4 w-[50%] md:w-fit text-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
          🔥 Trending now
        </span>
        {/* <h2 className="max-w-2xl text-4xl font-bold md:text-6xl" /> */}
        <div className="h-12 w-3/4 rounded bg-slate-700" />
        <div className="mt-4 space-y-2">
          <div className="h-4 w-full rounded bg-slate-700"></div>
          <div className="h-4 w-5/6 rounded bg-slate-700"></div>
          <div className="h-4 w-3/4 rounded bg-slate-700"></div>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <span className="h-4 w-16 rounded bg-slate-700"></span>
          <span className="h-4 w-20 rounded bg-slate-700"></span>
          <span className="h-4 w-24 rounded bg-slate-700"></span>
          <span className="h-4 w-32 rounded bg-slate-700"></span>
        </div>
        <div className="mt-6 h-12 w-40 rounded-full bg-slate-700" />{" "}
      </div>
    </section>
  );
};

export default HeroSkeleton;
