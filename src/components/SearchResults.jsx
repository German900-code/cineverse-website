import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MediaCard from "./MediaCard";
import { searchMedia } from "../api/searchMedia";
import { MEDIA_TYPE } from "../constants/mediaType";
import MediaSkeleton from "./skeletons/MediaSkeleton";
import { motion } from "framer-motion";

const SearchResults = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query.trim()) return;

    const fetchResults = async () => {
      setIsLoading(true);

      try {
        const data = await searchMedia(query);
        const filtered = data.results.filter(
          (item) =>
            item.media_type === MEDIA_TYPE.MOVIE ||
            item.media_type === MEDIA_TYPE.TV_SHOW,
        );
        setData(filtered);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <MediaSkeleton key={index} />
        ))}
      </div>
    );
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <section className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-cyan-400">
          Search results for "{query}" ({data.length})
        </h2>
        {data.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {data.map((item) => {
              const mediaType =
                item.media_type === "tv"
                  ? MEDIA_TYPE.TV_SHOW
                  : MEDIA_TYPE.MOVIE;
              return (
                <motion.div key={item.id} variants={cardVariants}>
                  <MediaCard
                    item={item}
                    mediaType={mediaType}
                    isLoading={isLoading}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <p className="text-slate-400">
            Nothing found 😕 Try another movie or TV show name.
          </p>
        )}
      </section>
    </main>
  );
};

export default SearchResults;
