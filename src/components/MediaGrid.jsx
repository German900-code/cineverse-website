import MediaCard from "./MediaCard";
import MediaSkeleton from "./skeletons/MediaSkeleton";
import { motion } from "framer-motion";

const MediaGrid = ({ media = [], mediaType, onRemoveFavorite, isLoading }) => {
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
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
    >
      {media.length > 0 ? (
        media.map((item) => (
          <motion.div key={item.id} variants={cardVariants}>
            <MediaCard
              // key={item.id}
              item={item}
              mediaType={mediaType}
              onRemoveFavorite={onRemoveFavorite}
            />
          </motion.div>
        ))
      ) : (
        <div className="col-span-full text-3xl text-center text-slate-400">
          No media available {media.length === 0 && "😕"}
        </div>
      )}
    </motion.div>
  );
};

export default MediaGrid;
