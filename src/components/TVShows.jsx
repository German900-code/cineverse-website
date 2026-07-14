import MediaCard from "./MediaCard";
import { FaArrowCircleLeft } from "react-icons/fa";
// import { mediaData } from "../data/mediaData";
import NavButton from "./NavButton";
import { useEffect, useState } from "react";
import MediaGrid from "./MediaGrid";
import { getPopularTVShows } from "../api/tv";

const TVShows = () => {
  const [popularTVShows, setPopularTVShows] = useState([]);

  useEffect(() => {
    getPopularTVShows().then((data) => setPopularTVShows(data.results));
  }, []);

  console.log("Popular TV Shows: ", popularTVShows);

  return (
    <section className="mx-auto px-4 py-10 md:px-8 bg-black/90">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-50">Popular TV Shows</h2>
        <NavButton path={"/"} label="Back home" icon={<FaArrowCircleLeft />} />
      </div>
      <MediaGrid
        media={popularTVShows}
        mediaType="tv"
        onRemoveFavorite={() => {}}
      />
      {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {mediaData
          .filter((item) => item.type === "tv-show")
          .map((tvShow) => (
            <MediaCard key={tvShow.id} item={tvShow} />
          ))}
      </div> */}
    </section>
  );
};

export default TVShows;
