const MediaCard = ({ item }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-cyan-500/20 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={item.poster}
          alt={item.title || item.name}
          className="h-65 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"
        />
      </div>
      <div className="p-4">
        <h3 className="line-clamp-1 text-base font-semibold text-slate-50">
          {item.title || item.name}
        </h3>
        <div className="mt-3 flex items-center justify-between text-sm text-slate-400">
          <span className="text-yellow-500">⭐ {item.rating}</span>
          <span>{item.release_date || item.first_air_date}</span>
        </div>
      </div>
    </article>
  );
};

export default MediaCard;
