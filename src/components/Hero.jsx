import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../public/gifs/infinity-loading.gif";
import HeroSkeleton from "./skeletons/HeroSkeleton";

const Hero = ({ heroMovie, isLoading, setIsLoading }) => {
  // const { id } = useParams();

  // useEffect(() => {
  //   setIsLoading(true);
  // }, []);

  if (isLoading) {
    return <HeroSkeleton />;
  }

  if (!heroMovie) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <h3 className="text-2xl font-semibold text-slate-300">
          No movie data available
        </h3>
        <p className="mt-2 max-w-max text-slate-500">
          Please check back later or select a different movie.
        </p>
      </div>
    );
  }

  return (
    <section className="relative min-h-[420px] overflow-hidden bg-slate-950 px-4 py-10 text-white md:min-h-[520px] md:px-8 lg:px-12">
      {/* {isLoading && (
        <div className="flex items-center justify-center">
          <img src={LoadingSpinner} alt="Loading..." />
        </div>
      )} */}
      <div
        className={`absolute inset-0 bg-[url('https://image.tmdb.org/t/p/w500${heroMovie.poster_path}')] bg-cover bg-center opacity-80`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${heroMovie.backdrop_path})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end pt-32 md:pt-48">
        <span className="mb-4 w-[50%] md:w-fit text-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
          🔥 Trending now
        </span>
        <h2 className="max-w-2xl text-4xl font-bold md:text-6xl">
          {heroMovie.title || heroMovie.name}
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 md:text-base">
          {heroMovie.description || heroMovie.overview}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <span>⭐ {heroMovie.vote_average?.toFixed(1)}</span>
          <span>{heroMovie.release_date?.split("-")[0]}</span>
          {heroMovie.genres?.[0]?.name ? (
            <span>{heroMovie.genres?.[0]?.name}</span>
          ) : null}
          <span>Language: {heroMovie.original_language?.toUpperCase()}</span>
        </div>
        <button className="mt-6 w-[50%] md:w-fit rounded-full cursor-pointer bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
          <Link to={`/details/${heroMovie.id}`}>View Details</Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
