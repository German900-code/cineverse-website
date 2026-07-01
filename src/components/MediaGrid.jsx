import MediaCard from "./MediaCard";

const MediaGrid = ({ movies = [] }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {movies.length > 0 ? (
        movies.map((movie) => <MediaCard key={movie.id} item={movie} />)
      ) : (
        <div className="col-span-full text-3xl text-center text-slate-400">
          No movies available
        </div>
      )}
    </div>
  );
};

export default MediaGrid;
