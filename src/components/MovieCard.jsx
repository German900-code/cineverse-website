const MovieCard = ({ movie }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-cyan-500/20">
      <div>
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-65 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"
        />
      </div>
      <div className="p-4">
        <h3 className="line-clamp-1 text-base font-semibold text-slate-50">
          {movie.title}
        </h3>
        <div className="mt-3 flex items-center justify-between text-sm text-slate-400">
          <span>{movie.rating}</span>
          <span>{movie.year}</span>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
