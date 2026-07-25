import MediaCard from "./MediaCard";
import MediaSkeleton from "./skeletons/MediaSkeleton";

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

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {media.length > 0 ? (
        media.map((item) => (
          <MediaCard
            key={item.id}
            item={item}
            mediaType={mediaType}
            onRemoveFavorite={onRemoveFavorite}
          />
        ))
      ) : (
        <div className="col-span-full text-3xl text-center text-slate-400">
          No media available {media.length === 0 && "😕"}
        </div>
      )}
    </div>
  );
};

export default MediaGrid;
