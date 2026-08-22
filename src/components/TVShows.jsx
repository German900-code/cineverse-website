import { FaArrowCircleLeft } from "react-icons/fa";
import NavButton from "./NavButton";
import { useEffect, useState } from "react";
import MediaGrid from "./MediaGrid";
import { getPopularTVShows } from "../api/tv";
import { MEDIA_TYPE } from "../constants/mediaType";

const TVShows = () => {
  const [popularTVShows, setPopularTVShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const popularTVShowsData = await getPopularTVShows();
        setPopularTVShows(popularTVShowsData.results);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="mx-auto px-4 py-10 md:px-8 bg-black/90">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-50">Popular TV Shows</h2>
        <NavButton path={"/"} label="Back home" icon={<FaArrowCircleLeft />} />
      </div>

      <MediaGrid
        media={popularTVShows}
        isLoading={isLoading}
        mediaType={MEDIA_TYPE.TV_SHOW}
        onRemoveFavorite={() => {}}
      />
    </section>
  );
};

export default TVShows;
