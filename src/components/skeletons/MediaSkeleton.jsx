import React from "react";

const MediaSkeleton = () => {
  return (
    <article className="animate-pulse overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg">
      {/* Poster */}
      <div className="h-65 w-full bg-slate-800 sm:h-80"></div>

      <div className="p-4">
        {/* Title */}
        <div className="h-5 w-3/4 rounded bg-slate-800"></div>

        {/* Rating + year + heart */}
        <div className="mt-3 flex items-center justify-between">
          <div className="h-4 w-12 rounded bg-slate-800"></div>

          <div className="h-4 w-10 rounded bg-slate-800"></div>

          <div className="h-6 w-6 rounded-full bg-slate-800"></div>
        </div>

        {/* Button */}
        <div className="mt-4 h-10 w-full rounded bg-slate-800"></div>
      </div>
    </article>
  );
};

export default MediaSkeleton;
